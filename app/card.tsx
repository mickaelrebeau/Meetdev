import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import ProfilCard from "../components/ProfilCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";

const mike = {
	id: "e856ev6rg6ge6g458",
	image: require("../assets/images/mike.png"),
	bio: "Lorem ipsum dolor sit amet consectetur. Imperdiet urna proin et leo sollicitudin facilisi dolor magna. Augue tristique amet faucibus dictumenim viverra. Ullamcorper risus felis magna sem risus vestibulum miaugue.",
	username: "Mike_dreeman",
	post: "Frontend Developer",
	company: "Apple",
	github_url: "https://github.com/Mike-dreeman",
	portfolio_url: "https://www.mike-dreeman-portfolio.vercel.app",
	tags: ["Python", "Javascript", "Typescript", "Java"],
};

export default function Card() {
	const [datas, setDatas] = useState<{
		image_uri: string;
		bio: string;
		username: string;
		company: string;
		post: string;
		github_url: string;
		portfolio_url: string;
	}>({
		image_uri: "",
		bio: "",
		username: "",
		company: "",
		post: "",
		github_url: "",
		portfolio_url: "",
	});
	const [programming, setProgramming] = useState<string[]>([]);
	
    return (
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<View style={styles.card}>
						<ProfilCard {...mike} />
					</View>
					<View style={styles.buttons}>
						<Pressable
							onPress={() => router.push("/edit-profile")}
							style={({ pressed }) => [
								styles.button,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.title}>Edit profile</Text>
						</Pressable>
						<Pressable
							onPress={() => router.push("/profil")}
							style={({ pressed }) => [
								styles.button,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.title}>Close</Text>
						</Pressable>
					</View>
				</View>
			</SafeAreaView>
		);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
        justifyContent: "center",
        gap: 30,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	content: {
		width: "100%",

		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		width: "90%",
		height: "60%",

		justifyContent: "center",
		alignItems: "center",
	},
    buttons: {
        width: "100%",
        marginTop: 20,
        alignItems: "center",
		flexDirection: "column",
		gap: 10,
	},
	button: {
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
});