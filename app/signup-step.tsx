import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "../components/Themed";
import { StyleSheet } from "react-native";
import { AddFiltersPreference } from "../components/signup-step";

export default function SignUpStep() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.card}>
				<View style={styles.header}>
					<Text style={styles.title}>Welcome to Meetdev !</Text>
					<Text style={styles.text}>
						Don't forget to complete your profile.
					</Text>
				</View>
				<View style={styles.body}>
					<AddFiltersPreference />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		width: "100%",
		height: "100%",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		padding: 20,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 30,
	},
	body: {
		flex: 1,
		width: "90%",
		paddingBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		fontSize: 16,
		fontWeight: "500",
		textAlign: "center",
	},
});
