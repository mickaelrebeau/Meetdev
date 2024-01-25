import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

export default function ProfilScreen() {
	const router = useRouter();
	const currentUser = auth().currentUser;
	const [datas, setDatas] = useState<{
		image_uri: string;
		username: string;
	}>({
		image_uri: "",
		username: "",
	});

	const getDatas = async (user: FirebaseAuthTypes.User | null) => {
		db().ref(`users/${user?.uid}`).on("value", (snapshot) => {
			const value = snapshot.val();

			setDatas({
				image_uri: value?.image_uri ?? "",
				username: value?.name ?? "",
			});
		});
	}

	useEffect(() => {
		if (currentUser !== null) {
			getDatas(currentUser);
		}
	}, [currentUser]);
	
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				{datas.image_uri !== "" ? (<Image
					style={styles.image}
					source={{uri: datas.image_uri}}
				/>) : (
					<View style={styles.image}/>
				)}
				{datas.username !== "" ? (<Text style={styles.title}>{datas.username}</Text>) : (<Text>No data.</Text>)}
			</View>
			<View style={styles.card}>
				<Pressable
					onPress={() => router.push("/edit-profile")}
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
					onPress={() => router.push("/card")}
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
				<Text style={styles.title2}>Coming soon..</Text>
				<Text style={[styles.text, { textAlign: "center", width: "80%" }]}>
					Subscriptions page and shop will be coming soon for suport the projct
					you can make a donation by cliking here.
				</Text>
				<Pressable
					style={({ pressed }) => [
						styles.buttonOutline,
						{
							opacity: pressed ? 0.5 : 1,
						}
					]}
					onPress={() => router.push("https://streamlabs.com/mike_dreeman/tip")}
				>
					<Text style={styles.textButton}>Donate</Text>
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
	text: {
		fontSize: 18,
		fontWeight: "300",
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
		borderWidth: 1,
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
