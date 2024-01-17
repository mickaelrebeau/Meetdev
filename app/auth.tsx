import {
	Pressable,
	SafeAreaView,
	StyleSheet,
	useColorScheme,
} from "react-native";

import { Text, View } from "../components/Themed";
import { CheckBox, Input, Tab, TabView } from "@rneui/themed";
import { LogoSvg } from "../assets/images/LogoSvg";
import React from "react";
import Colors from "../constants/Colors";
import { router } from "expo-router";

export default function AuthScreen() {
	const colorScheme = useColorScheme();
	const [index, setIndex] = React.useState(0);
	const [checked, setChecked] = React.useState(false);
	const toggleCheckbox = () => setChecked(!checked);

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
					<View style={styles.form}>
						<Text style={styles.label}>Email</Text>
						<Input
							style={[
								styles.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholder="email@example.fr"
						/>

						<Text style={styles.label}>Password</Text>
						<Input
							style={[
								styles.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholder="@Exemple123"
							secureTextEntry
						/>

						<Pressable
							onPress={() => router.push("/home")}
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
					<View style={styles.signup}>
						<Text style={styles.label}>Username</Text>
						<Input
							style={[
								styles.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholder="Exemple123"
						/>

						<Text style={styles.label}>Email</Text>
						<Input
							style={[
								styles.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholder="email@exemple.fr"
						/>

						<Text style={styles.label}>Password</Text>
						<Input
							style={[
								styles.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholder="@Exemple123"
							secureTextEntry
						/>

						<CheckBox
							containerStyle={styles.checkbox}
							textStyle={{ color: Colors[colorScheme ?? "light"].text }}
							title="I accept the terms and conditions of use"
							checked={checked}
							onPress={toggleCheckbox}
						/>

						<Pressable
							onPress={() => {}}
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
				</TabView.Item>
			</TabView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	form: {
		marginVertical: 50,
		width: "80%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		gap: 1,
	},
	signup: {
		marginTop: 60,
		paddingBottom: 100,

		width: "80%",
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
