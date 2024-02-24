import {
	Alert,
	Pressable,
	SafeAreaView,
	StyleSheet,
	useColorScheme,
} from "react-native";
import { Text, View } from "../components/Themed";
import { Input, Tab, TabView } from "@rneui/themed";
import { LogoSvg } from "../assets/images/LogoSvg";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "./context/AuthContext";

export default function AuthScreen() {
	const colorScheme = useColorScheme();
	const { onLogin, onRegister } = useAuth();
	const [loginError, setLoginError] = useState<string | null>(null);
	const [registerError, setRegisterError] = useState<string | null>(null);
	const [index, setIndex] = useState(0);
	const [login, setLogin] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});

	const [register, setRegister] = useState<{
		displayName: string;
		email: string;
		password: string;
	}>({
		displayName: "",
		email: "",
		password: "",
	});

	const handleLogin = async () => {
		if (!login.email.trim()) {
			Alert.alert("Input empty","Please enter an email");
			return;
		}

		if (!login.password.trim()) {
			Alert.alert("Input empty", "Please enter a password");
			return;
		}

		const result = await onLogin!(login.email, login.password);
		if (result && result.error) {
			setLoginError("Invalid email or password");
		}
	};

	const handleRegister = async () => {
		if (!register.displayName.trim()) {
			Alert.alert("Input empty", "Please enter an username");
			return;
		}

		if (!register.email.trim()) {
			Alert.alert("Input empty", "Please enter an email");
			return;
		}

		if (!register.password.trim()) {
			Alert.alert("Input empty", "Please enter a password");
			return;
		}

		const result = await onRegister!(
			register.displayName,
			register.email,
			register.password
		);
		if (result && result.error) {
			setRegisterError("Invalid email or password");
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logo}>
				<LogoSvg />
				<Text style={styles.titleLogo}>Meetdev</Text>
			</View>
			<Tab
				style={{
					marginTop: 20,
				}}
				value={index}
				onChange={(e) => setIndex(e)}
				indicatorStyle={{
					height: 1,
					backgroundColor: Colors[colorScheme ?? "light"].tint,
				}}
			>
				<Tab.Item
					title="Login"
					titleStyle={{
						fontSize: 24,
						color: Colors[colorScheme ?? "light"].text,
					}}
				/>
				<Tab.Item
					title="Sign Up"
					titleStyle={{
						fontSize: 24,
						color: Colors[colorScheme ?? "light"].text,
					}}
				/>
			</Tab>

			<TabView value={index} onChange={setIndex} animationType="spring">
				<TabView.Item
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ScrollView style={styles.scrollView}>
						<View style={styles.form}>
							<Text style={styles.label}>Email</Text>
							<Input
								style={[
									styles.input,
									{ color: Colors[colorScheme ?? "light"].text },
								]}
								placeholder="email@example.fr"
								value={login.email}
								onChangeText={(email) => setLogin({ ...login, email })}
							/>

							<Text style={styles.label}>Password</Text>
							<Input
								style={[
									styles.input,
									{ color: Colors[colorScheme ?? "light"].text },
								]}
								placeholder="@Exemple123"
								value={login.password}
								onChangeText={(password) => setLogin({ ...login, password })}
								secureTextEntry
							/>

							{loginError && <Text style={styles.errorText}>{loginError}</Text>}

							<Pressable
								onPress={handleLogin}
								style={({ pressed }) => [
									styles.button,
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<Text style={styles.textButton}>Login</Text>
							</Pressable>

							<Pressable
								onPress={() => router.push("/forgot-password")}
								style={({ pressed }) => [
									{ opacity: pressed ? 0.5 : 1, marginTop: 30 },
								]}
							>
								<Text style={styles.textButton}>Forgot password?</Text>
							</Pressable>
						</View>
					</ScrollView>
				</TabView.Item>

				<TabView.Item
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<ScrollView style={styles.scrollView}>
						<View style={styles.signup}>
							<Text style={styles.label}>Username</Text>
							<Input
								style={[
									styles.input,
									{ color: Colors[colorScheme ?? "light"].text },
								]}
								placeholder="Exemple123"
								value={register.displayName}
								onChangeText={(displayName) =>
									setRegister({ ...register, displayName })
								}
							/>

							<Text style={styles.label}>Email</Text>
							<Input
								style={[
									styles.input,
									{ color: Colors[colorScheme ?? "light"].text },
								]}
								placeholder="email@exemple.fr"
								value={register.email}
								onChangeText={(email) => setRegister({ ...register, email })}
							/>

							<Text style={styles.label}>Password</Text>
							<Input
								style={[
									styles.input,
									{ color: Colors[colorScheme ?? "light"].text },
								]}
								placeholder="@Exemple123"
								value={register.password}
								onChangeText={(password) =>
									setRegister({ ...register, password })
								}
								secureTextEntry
							/>

							{registerError && (
								<Text style={styles.errorText}>{registerError}</Text>
							)}

							<Pressable
								onPress={handleRegister}
								style={({ pressed }) => [
									styles.button,
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<Text style={styles.textButton}>Sign Up</Text>
							</Pressable>
						</View>
					</ScrollView>
				</TabView.Item>
			</TabView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		width: "100%",
		height: "auto",

		paddingHorizontal: 20,
	},
	logo: {
		marginTop: 50,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		backgroundColor: "transparent",
	},
	titleLogo: {
		fontSize: 30,
		fontWeight: "bold",
	},
	errorText: {
		color: "red",
		fontSize: 18,
	},
	form: {
		marginVertical: 50,

		width: "100%",
		height: "auto",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 1,

		backgroundColor: "transparent",
	},
	signup: {
		marginTop: 60,
		paddingBottom: 100,

		width: "100%",
		height: "auto",

		backgroundColor: "transparent",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 1,

		zIndex: 100,
		elevation: 100,
	},
	label: {
		width: "100%",
		marginBottom: 5,

		fontSize: 16,
		fontWeight: "400",
		textAlign: "left",
	},
	input: {
		padding: 10,
		borderBottomWidth: 2,
		color: "white",
	},
	button: {
		marginTop: 30,

		width: "100%",
		paddingVertical: 15,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		backgroundColor: "transparent",
		borderRadius: 50,
		borderColor: "#2f95dc",
		borderWidth: 1,
	},
	textButton: {
		fontSize: 20,
		fontWeight: "500",
	},
	checkbox: {
		backgroundColor: "transparent",
		gap: 5,
		width: "100%",
	},
});
