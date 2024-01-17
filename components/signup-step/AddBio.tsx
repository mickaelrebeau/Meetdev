import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import { TextInput, StyleSheet, useColorScheme } from "react-native";

export const AddBio = () => {
	const colorScheme = useColorScheme();
	
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { textAlign: "center" }]}>
				Tell us more about yourself
			</Text>
			<View style={styles.formContent}>
				<Text style={styles.title}>Bio</Text>
				<TextInput
					placeholder="Ceci est une bio haha.."
					multiline
					numberOfLines={6}
					style={[styles.bio, { color: Colors[colorScheme ?? "light"].text }]}
					placeholderTextColor="gray"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		gap: 20,
	},
	formContent: {
		width: "100%",
		gap: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	bio: {
		padding: 10,
		width: "100%",
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 8,
	},
});
