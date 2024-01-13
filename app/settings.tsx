import { Pressable, StyleSheet, useColorScheme } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { router } from "expo-router";

export default function SettingsScreen() {
	const colorScheme = useColorScheme();

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>Notifications</Text>
				<View style={styles.subcard}>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>E-mail address</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Notifications</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Contact us</Text>
				<View style={styles.subcard}>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Help and support</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Confidentialities</Text>
				<View style={styles.subcard}>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Privacy Policy</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Privacy Preference</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.card}>
				<Text style={styles.title}>Legal Notice</Text>
				<View style={styles.subcard}>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Licenses</Text>
					</Pressable>
					<Pressable
						style={({ pressed }) => [
							{
								opacity: pressed ? 0.5 : 1,
							},
						]}
					>
						<Text style={styles.text}>Terms of use</Text>
					</Pressable>
				</View>
			</View>
			<View style={styles.buttons}>
				<Pressable
					onPress={() => router.push("/")}
					style={({ pressed }) => [
						styles.button,
						{
							opacity: pressed ? 0.5 : 1,
							backgroundColor: Colors[colorScheme ?? "light"].tint,
						},
					]}
				>
					<Text style={[styles.title, { color: "black" }]}>Log Out</Text>
				</Pressable>
				<Pressable
					onPress={() => router.push("/")}
					style={({ pressed }) => [
						styles.buttonOutline,
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				>
					<Text style={styles.title}>Delete your account</Text>
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		gap: 30,
	},
	card: {
		width: "90%",
		display: "flex",
		flexDirection: "column",
		gap: 10,
	},
	subcard: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		display: "flex",
		flexDirection: "column",
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		fontSize: 18,
		fontWeight: "300",
	},
	buttons: {
		width: "100%",
		marginTop: 20,
		alignItems: "center",
		flexDirection: "column",
		gap: 10,
	},
	buttonOutline: {
		width: "90%",
		paddingVertical: 15,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		backgroundColor: "transparent",
		borderRadius: 50,
		borderColor: "#2f95dc",
		borderWidth: 2,
	},
	button: {
		width: "90%",
		paddingVertical: 15,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		borderWidth: 1,
		borderRadius: 50,
		borderColor: "transparent",
	},
});
