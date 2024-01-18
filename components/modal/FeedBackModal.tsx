import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "../Themed";
import { Modal, Pressable, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

export const FeedBack = ({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: (value: boolean) => void;
    }) => {
    const colorScheme = useColorScheme();
    
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
						<Text style={styles.title}>Feedback</Text>
						<Pressable
							onPress={() => setModalVisible(!modalVisible)}
							style={({ pressed }) => [
								styles.close,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<AntDesign
								name="closecircle"
								size={24}
								color={Colors[colorScheme ?? "light"].tint}
							/>
						</Pressable>
					</View>
					<View style={styles.body}>
                        <Text style={styles.text}>If you want to give feedback, please contact us.</Text>
                        <Text style={styles.email}>meetdev-feedback@contact.fr</Text>
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
		width: "90%",

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
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		fontSize: 16,
		fontWeight: "400",
	},
	email: {
		fontSize: 18,
		fontWeight: "500",
	},
	close: {
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	body: {
		paddingVertical: 30,

		alignItems: "center",
		gap: 20,
	},
});
