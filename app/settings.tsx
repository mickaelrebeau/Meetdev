import { Pressable, SafeAreaView, StyleSheet, useColorScheme } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { LogoSvg } from "../assets/images/LogoSvg";
import { useState } from "react";
import { FeedBack } from "../components/modal/FeedBackModal";
import { PrivacyPolicy } from "../components/modal/PrivacyPolicyModal";
import { useAuth } from "./context/AuthContext";

export default function SettingsScreen() {
	const colorScheme = useColorScheme();
	const { onLogout } = useAuth();
	const [modalFeedBackVisible, setModalFeedBackVisible] = useState(false);
	const [modalPrivacyPolicyVisible, setModalPrivacyPolicyVisible] =
		useState(false);
	
	const handlelogout = async () => {
		await onLogout();

		router.push("/");
	}

	const handleDeleteAccount = async () => {
		router.push("/");
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				style={{
					width: "100%",
				}}
			>
				<View style={styles.settings}>
					<View style={styles.card}>
						<Text style={styles.title}>Contact us</Text>
						<View style={styles.subcard}>
							<Pressable
								onPress={() => setModalFeedBackVisible(true)}
								style={({ pressed }) => [
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<Text style={styles.text}>Give Feedback</Text>
							</Pressable>
						</View>
					</View>
					<View style={styles.card}>
						<Text style={styles.title}>Confidentialities</Text>
						<View style={styles.subcard}>
							<Pressable
								onPress={() => setModalPrivacyPolicyVisible(true)}
								style={({ pressed }) => [
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<Text style={styles.text}>Privacy Policy</Text>
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
							onPress={handlelogout}
							style={({ pressed }) => [
								styles.button,
								{
									opacity: pressed ? 0.5 : 1,
									backgroundColor: Colors[colorScheme ?? "light"].tint,
								},
							]}
						>
							<Text
								style={[
									styles.title,
									{ color: Colors[colorScheme ?? "light"].background },
								]}
							>
								Log Out
							</Text>
						</Pressable>
						<Pressable
							onPress={handleDeleteAccount}
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
					<View style={styles.footer}>
						<View style={styles.logo}>
							<LogoSvg />
							<Text style={styles.text}>Meetdev</Text>
						</View>
						<Text style={[styles.text, { textAlign: "center" }]}>
							© 2024, Meetdev
						</Text>
					</View>
				</View>
			</ScrollView>
			<FeedBack
				modalVisible={modalFeedBackVisible}
				setModalVisible={setModalFeedBackVisible}
			/>
			<PrivacyPolicy
				modalVisible={modalPrivacyPolicyVisible}
				setModalVisible={setModalPrivacyPolicyVisible}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		alignItems: "center",
	},
	settings: {
		paddingHorizontal: 20,
		paddingVertical: 20,

		gap: 20,
	},
	card: {
		width: "100%",
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
		fontWeight: "500",
	},
	text: {
		fontSize: 18,
		fontWeight: "400",
	},
	buttons: {
		width: "100%",
		marginTop: 80,
		alignItems: "center",
		flexDirection: "column",
		gap: 20,
	},
	buttonOutline: {
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
	button: {
		width: "100%",
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
	footer: {
		marginTop: 80,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		gap: 10,
	},
	logo: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	}
});
