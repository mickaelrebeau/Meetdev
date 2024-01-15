import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../Themed";
import { AntDesign } from "@expo/vector-icons";

export const AddPhoto = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add a photo of yourself or an avatar</Text>
			<View>
				<View style={styles.media}>
					<View style={styles.photo} />
				</View>
				<Pressable
					style={({ pressed }) => [
						styles.add,
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				>
					<AntDesign name="pluscircleo" size={28} color="black" />
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
		alignItems: "center",
		gap: 30,
    },
	media: {
		padding: 10,
		width: "100%",
		display: "flex",
		alignItems: "flex-start",
	},
	photo: {
		width: 120,
		height: 120,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "gray",
		borderStyle: "dashed",
		backgroundColor: "#3e3e3e",
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
    },
	form: {
		marginVertical: 20,
		width: "90%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		gap: 20,
	},
	add: {
		position: "absolute",
		bottom: 0,
		right: 0,

		padding: 2,
		borderRadius: 50,
		backgroundColor: "white",
	},
});