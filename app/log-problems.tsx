import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "../components/Themed";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from 'expo-router';
import Colors from '../constants/Colors';

export default function LogProblems() {
    const colorScheme = useColorScheme();

    return (
			<SafeAreaView style={styles.container}>
				<View style={styles.card}>
					<Text style={[styles.text, { marginBottom: 20 }]}>
						You can't connect with google or github ? log with your email.
					</Text>
					<Pressable
						onPress={() => router.push("/auth")}
						style={({ pressed }) => [
							styles.button,
							{
								opacity: pressed ? 0.5 : 1,
								backgroundColor: Colors[colorScheme ?? "light"].text,
							},
						]}
					>
						<FontAwesome name="envelope" size={25} color="black" />
						<Text
							style={[
								styles.textButton,
								{ color: Colors[colorScheme ?? "light"].background },
							]}
						>
							Sign Up with an email
						</Text>
					</Pressable>
				</View>
				<View style={styles.card}>
					<Text style={styles.text}>Have you forgot your password ?</Text>
					<Pressable
						onPress={() => router.push("/forgot-password")}
						style={({ pressed }) => [
							styles.buttonOutline,
							{
								opacity: pressed ? 0.5 : 1,
								color: Colors[colorScheme ?? "light"].text,
							},
						]}
					>
						<Text style={[styles.textButton, { textAlign: "center" }]}>
							Forgot password ?
						</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	card: {
		width: "100%",
        padding: 20,
        display: "flex",
        alignItems: "center",
		gap: 20,
	},
	text: {
		fontSize: 16,
		fontWeight: "500",
		textAlign: "center",
	},
	button: {
		width: "90%",

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		paddingVertical: 12,
		paddingHorizontal: 32,
        borderRadius: 50,
        borderWidth: 2,
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
		borderWidth: 1,
	},
	textButton: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
	},
});