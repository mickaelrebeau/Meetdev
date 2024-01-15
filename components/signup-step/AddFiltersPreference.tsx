import { Filters } from "../Filters";
import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";

export const AddFiltersPreference = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { textAlign: "center" }]}>
				What is your interest?
			</Text>
			<View style={styles.card}>
				<Filters />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	card: {
		width: "100%",
		marginVertical: 20,
	}
});
