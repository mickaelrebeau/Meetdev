import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";

export const Filters = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Filters by technologies</Text>
			<Text style={styles.title}>Filters by countries</Text>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
	title: {
		fontSize: 18,
		fontWeight: "400",
	},
});
