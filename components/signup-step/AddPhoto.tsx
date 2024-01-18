import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export const AddPhoto = () => {
	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Add a photo of yourself or an avatar</Text>
			<View>
				<View style={styles.media}>
					{image !== null ? (
						<Image source={{ uri: image }} style={styles.image} />
					) : (
						<View style={styles.photo} />
					)}
				</View>
				<Pressable
					onPress={pickImage}
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
	image: {
		width: 200,
		height: 200,
		borderWidth: 2,
		borderRadius: 10,
	},
	photo: {
		width: 200,
		height: 200,
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