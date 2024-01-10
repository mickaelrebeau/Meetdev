import { StatusBar } from "expo-status-bar";
import {
	ImageBackground,
	Platform,
	Pressable,
	StyleSheet,
} from "react-native";

import { Text, View } from "../components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LogoSvg } from "../assets/images/LogoSvg";
import { useRouter } from "expo-router";

export default function HeroScreen() {
    const router = useRouter();

	return (
		<ImageBackground
			source={require("../assets/images/hero-img.png")}
			style={styles.container}
		>
			<View style={styles.logo}>
				<LogoSvg />
				<Text style={[styles.titleLogo, { color: "white" }]}>Meetdev</Text>
			</View>
			<Text style={[styles.title, { color: "white" }]}>
				Everything starts with code.
			</Text>
			<View style={styles.authButton}>
				<Pressable
					onPress={() => router.push("/home")}
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.5 : 1 },
					]}
				>
					<FontAwesome name="github" size={25} color="white" />
					<Text style={styles.textButton}>Sign Up with Github</Text>
				</Pressable>
				<Pressable
					onPress={() => router.push("/home")}
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.5 : 1 },
					]}
				>
					<FontAwesome name="google" size={25} color="white" />
					<Text style={styles.textButton}>Sign Up with Google</Text>
				</Pressable>
				<Pressable
					onPress={() => router.push("/auth")}
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.5 : 1, backgroundColor: "white" },
					]}
				>
					<FontAwesome name="envelope" size={25} color="black" />
					<Text style={[styles.textButton, { color: "black" }]}>
						Sign Up with an email
					</Text>
				</Pressable>

				<Pressable
					onPress={() => router.push("/auth")}
					style={({ pressed }) => [
						{ opacity: pressed ? 0.5 : 1, marginTop: 20 },
					]}
				>
					<Text style={styles.textButton}>Connection problems?</Text>
				</Pressable>
			</View>

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		resizeMode: "cover",
	},
	logo: {
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
	title: {
		fontSize: 30,
		fontWeight: "500",
	},
	textButton: {
		fontSize: 20,
		fontWeight: "500",
		color: "#fff",
	},
	authButton: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		backgroundColor: "transparent",
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
		borderColor: "#fff",

		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},
});
