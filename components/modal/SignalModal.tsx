import { StyleSheet, Modal, Pressable } from "react-native";
import { Text, View } from "../Themed";
import { AntDesign } from "@expo/vector-icons";

export const SignalModal = ({
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
						<Text style={styles.title}>Actions</Text>
						<Pressable
							onPress={() => setModalVisible(!modalVisible)}
							style={({ pressed }) => [
								styles.close,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<AntDesign name="closecircle" size={24} color="white" />
						</Pressable>
					</View>
					<View style={styles.body}>
						<Pressable
							style={({ pressed }) => [
								styles.buttonOutline,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.title}>Report</Text>
						</Pressable>
						<Pressable
							style={({ pressed }) => [
								styles.buttonOutline,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.title}>Block</Text>
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
