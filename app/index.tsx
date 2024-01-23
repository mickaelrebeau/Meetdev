import { StatusBar } from "expo-status-bar";
import { ImageBackground, Platform, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LogoSvg } from "../assets/images/LogoSvg";
import { useRouter } from "expo-router";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { createTokenWithCode } from "../utils/createToken";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
	authorizationEndpoint: "https://github.com/login/oauth/authorize",
	tokenEndpoint: "https://github.com/login/oauth/access_token",
	revocationEndpoint:
		"https://github.com/settings/connections/applications/1d346e1b8f7973c3cb2d",
};

export default function HeroScreen() {
	const router = useRouter();

	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId: "1d346e1b8f7973c3cb2d",
			scopes: [],
			redirectUri: makeRedirectUri(),
		},
		discovery
	);

	const handleResponse = async () => {
		if (response?.type === "success") {
			const { code } = response.params;
			const { token_type, scope, access_token } = await createTokenWithCode(
				code
			);

			if (!access_token) {
				alert("Something went wrong. Please try again.");
				return;
			}

			const credential = auth.GithubAuthProvider.credential(access_token);
			await auth().signInWithCredential(credential);

			router.push("/signup-step");
		}
	};

	const handleGoogleSignin = async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const { idToken } = await GoogleSignin.signIn();
			const credential = auth.GoogleAuthProvider.credential(idToken);
			await auth().signInWithCredential(credential);

			router.push("/signup-step");
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		GoogleSignin.configure({
			webClientId:
				"561315881893-pqn4j9i9l2gv8s8no2ckgj9fe2k0obro.apps.googleusercontent.com",
		});

		handleResponse();
	}, [response]);

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
					onPress={() => {
						promptAsync();
					}}
					style={({ pressed }) => [
						styles.button,
						{ opacity: pressed ? 0.5 : 1 },
					]}
				>
					<FontAwesome name="github" size={25} color="white" />
					<Text style={styles.textButton}>Sign Up with Github</Text>
				</Pressable>
				<Pressable
					onPress={handleGoogleSignin}
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
