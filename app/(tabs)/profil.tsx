import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";

import { Text, View } from "../../components/Themed";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfilScreen() {
	const router = useRouter();
	const colorScheme = useColorScheme();
	
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image
					style={styles.image}
					source={require("../../assets/images/mike.png")}
				/>
				<Text style={styles.title}>Mike_Dreeman</Text>
			</View>
			<View style={styles.card}>
				<Pressable
					style={({ pressed }) => [
						styles.buttonOutline,
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				>
					<Text style={styles.textButton}>Edit profile</Text>
				</Pressable>
				<Pressable
					style={({ pressed }) => [
						styles.buttonOutline,
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				>
					<Text style={styles.textButton}>View public profile</Text>
				</Pressable>
			</View>
			<View style={[styles.card, { gap: 30 }]}>
				<View style={styles.sub}>
					<Text style={styles.title2}>Subscriptions</Text>
					<Text>Compare</Text>
				</View>
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
					<Text style={[styles.title2, { color: "black" }]}>Meetdev Premium</Text>
					<Text style={{ color: "black" }}>From $8.99</Text>
					<MaterialIcons name="arrow-forward-ios" size={24} color="black" />
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
	},
	title2: {
		fontSize: 20,
		fontWeight: "bold",
	},
	image: {
		width: 120,
		height: 120,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: "#2f95dc",
	},
	textButton: {
		fontSize: 20,
		fontWeight: "500",
	},
	card: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	sub: {
		width: "90%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
