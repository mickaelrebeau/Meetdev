import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import ProfilCard from "../components/ProfilCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

export default function Card() {
	const currentUser = auth().currentUser;
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

	const user = {
		id: currentUser?.uid ?? "",
		username: datas.username,
		image_uri: datas.image_uri,
		company: datas.company,
		post: datas.post,
		github_url: datas.github_url,
		portfolio_url: datas.portfolio_url,
		bio: datas.bio,
		tags: programming,
	};

	const getDatas = async (user: FirebaseAuthTypes.User | null) => {
		db()
			.ref(`users/${user?.uid}`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setDatas({
					image_uri: value?.image_uri ?? "",
					bio: value?.bio ?? "",
					username: value?.name ?? "",
					company: value?.company ?? "",
					post: value?.post ?? "",
					github_url: value?.github_url ?? "",
					portfolio_url: value?.portfolio_url ?? "",
				});
			});

		db()
			.ref(`users/${user?.uid}/programming_languages`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setProgramming(Object.values(value ?? []));
			});
	};

	useEffect(() => {
		if (currentUser !== null) {
			getDatas(currentUser);
		}
	}, [currentUser]);
	
    return (
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<View style={styles.card}>
						<ProfilCard {...user} />
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