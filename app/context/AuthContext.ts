import * as SecureStorage from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

interface AuthProps {
	authState?: { token?: string | null; authenticated: boolean | null };
	onRegister?: (
		email: string,
		password: string,
		displayName: string
	) => Promise<any>;
	onLogin?: (email: string, password: string) => Promise<any>;
	onLogout?: () => Promise<any>;
}

const TOKEN_KEY = "token";
export const API_URL = "http://192.168.1.36:3030";
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
	const [authState, setAuthState] = useState<{
		token: null | string;
		authenticated: null | boolean;
	}>({
		token: null,
		authenticated: null,
	});

	useEffect(() => {
		const loadToken = async () => {
			const token = await SecureStorage.getItemAsync(TOKEN_KEY);
			if (token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                setAuthState({
                    token: token,
                    authenticated: true,
                })
			}
        };
        loadToken();
	}, []);

	const login = async (email: string, password: string) => {
		try {
			const result = await axios.post(API_URL + "/auth/signin", {
				email,
				password,
			});

			setAuthState({
				token: result.data.token,
				authenticated: true,
			});

			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${result.data.token}`;

			await SecureStorage.setItemAsync(TOKEN_KEY, result.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	const register = async (
		email: string,
		password: string,
		displayName: string
	) => {
		try {
			const result = await axios.post(API_URL + "/auth/signup", {
				email,
				password,
				displayName,
			});

			if (result.status === 201) {
				Alert.alert("Success", "Your account has been created. Please login.");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		await SecureStorage.deleteItemAsync(TOKEN_KEY);
		axios.defaults.headers.common["Authorization"] = "";
		setAuthState({
			token: null,
			authenticated: false,
		});
	};

    const value = {
        authState,
		onRegister: register,
		onLogin: login,
		onLogout: logout,
    };
    
    return <AuthContext.Provider value={ value }> { children } </AuthContext.Provider>;
};
