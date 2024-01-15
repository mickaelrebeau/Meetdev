import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { useState } from "react";
import { NewMatch } from "../components/modal/NewMatchModal";

export default function NotificationsScreen() {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Notifications</Text>
			<Pressable
				onPress={() => setModalVisible(!modalVisible)}
				style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 }]}
			>
				<Text style={styles.title}>Go to new match screen</Text>
			</Pressable>
			<NewMatch modalVisible={modalVisible} setModalVisible={setModalVisible} />
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="app/notifications.tsx" />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
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
		borderWidth: 2,
	},
});
