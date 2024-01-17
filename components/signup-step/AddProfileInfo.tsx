import { Text, View } from "../Themed";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

export const AddProfileInfo = () => {
	const colorScheme = useColorScheme();
	
	return (
		<View style={styles.container}>
			<Text style={[styles.title, { textAlign: "center" }]}>
				Complete your profile informations
			</Text>
			<ScrollView style={styles.scrollView}>
				<View style={styles.formContent}>
					<Text style={styles.title}>Country</Text>
					<TextInput
						placeholder="France"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>

				<View style={styles.formContent}>
					<Text style={styles.title}>Languages</Text>
					<TextInput
						placeholder="Français, Espagnol, Anglais"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Programming Languages</Text>
					<TextInput
						placeholder="Javascript, Python"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Post</Text>
					<TextInput
						placeholder="Développer Frontend"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Company</Text>
					<TextInput
						placeholder="En recherche d'emploi mdr"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Github Url</Text>
					<TextInput
						placeholder="https://github.com/mickaelrebeau"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Gitlab Url</Text>
					<TextInput
						placeholder="https://gitlab.com/Mike97310"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Portfolio Url</Text>
					<TextInput
						placeholder="https://mike-dreeman-portfolio.vercel.app/"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	scrollView: {
		width: "100%",
		backgroundColor: "transparent",
	},
	formContent: {
		paddingVertical: 10,
		width: "100%",
		gap: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	input: {
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 8,
	},
});
