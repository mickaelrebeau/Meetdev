import * as SecureStorage from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

interface AuthProps {
	authState: { token?: string | null; authenticated: boolean };
	onRegister: (
		email: string,
		password: string,
		displayName: string
	) => Promise<boolean>;
	onLogin: (email: string, password: string) => Promise<boolean>;
	onLogout: () => Promise<void>;
}

const TOKEN_KEY = "token";
export const API_URL = "http://192.168.1.36:3030";
const AuthContext = createContext<AuthProps>({
	authState: {
		token: null,
		authenticated: false,
	},
	onRegister: () => new Promise((resolve) => resolve(false)),
	onLogin: () => new Promise((r) => r(false)),
	onLogout: () => new Promise(r => r()),
});
export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
	const [authState, setAuthState] = useState<AuthProps["authState"]>({
		token: null,
		authenticated: false,
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

	const login = async (email: string, password: string): Promise<boolean> => {
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
			return true;
		} catch (error) {
			return false;
		}
	};

	const register = async (
		email: string,
		password: string,
		displayName: string
	): Promise<any> => {
		try {
			const result = await axios.post(API_URL + "/auth/signup", {
				email,
				password,
				displayName,
			});

			if (result.status === 201) {
				Alert.alert("Success", "Your account has been created. Please login.");
			}

			return true;
		} catch (error) {
			return false;
		}
	};

	const logout = async (): Promise<void> => {
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
    
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};
