import { StyleSheet, Modal, Pressable } from "react-native";
import { View, Text } from "../Themed";
import { router } from "expo-router";

export const ForgotPasswordModal = ({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: (value: boolean) => void;
}) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.header}>
						<Text style={styles.title}>Email sent !</Text>
					</View>
					<View style={styles.body}>
						<Text style={styles.text}>
							If you have an account with us, you will receive an email shortly.
						</Text>
						<Text style={styles.text}>
							Please check your email to reset your password.
						</Text>
						<Pressable
							onPress={() => router.push("/auth")}
							style={({ pressed }) => [
								styles.buttonOutline,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.title}>Log In</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		padding: 20,
		width: "80%",

		borderRadius: 10,
	},
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	close: {
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        fontWeight: "500",
    },
	body: {
		paddingVertical: 20,

		alignItems: "center",
		gap: 20,
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
});
