import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "../components/Themed";
import Colors from "../constants/Colors";
import { Input } from "@rneui/themed";
import { useState } from "react";
import { ForgotPasswordModal } from "../components/modal/ForgotPasswordModal";

export default function ForgotPassword() {
	const colorScheme = useColorScheme();
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.title}>Enter your email</Text>
				<Input
					placeholder="Email@test.fr"
					style={{ color: Colors[colorScheme ?? "light"].text }}
				></Input>
				<Pressable
					onPress={() => setModalVisible(true)}
					style={({ pressed }) => [
						styles.buttonOutline,
						{
							opacity: pressed ? 0.5 : 1,
							color: Colors[colorScheme ?? "light"].text,
						},
					]}
				>
					<Text
						style={[
							styles.textButton,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
					>
						Submit
					</Text>
				</Pressable>

				<ForgotPasswordModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
	form: {
		width: "100%",
		height: "100%",
		padding: 20,
		gap: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
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
	textButton: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
	},
});
