import { Text, View } from "../Themed";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import {
	MultipleSelectList,
	SelectList,
} from "react-native-dropdown-select-list";
import {
	dataCountry,
	dataLanguage,
	dataPost,
	dataProgrammingLanguage,
} from "../../constants/Datas";
import { SetStateAction, useState } from "react";

export const AddProfileInfo = () => {
	const colorScheme = useColorScheme();
	const [country, setCountry] = useState();
	const [language, setLanguage] = useState([]);
	const [programmingLanguage, setProgrammingLanguage] = useState([]);
	const [post, setPost] = useState();

	return (
		<View style={styles.container}>
			<Text style={[styles.title, { textAlign: "center" }]}>
				Complete your profile informations
			</Text>
			<ScrollView style={styles.scrollView}>
				<View style={styles.formContent}>
					<Text style={styles.title}>Username</Text>
					<TextInput
						placeholder="Mike_dreeman"
						style={[
							styles.input,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
						placeholderTextColor="gray"
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Country</Text>
					<SelectList
						search={false}
						data={dataCountry}
						setSelected={setCountry}
						placeholder="Select your country"
						searchPlaceholder="Search a country"
						dropdownStyles={styles.input}
						boxStyles={styles.input}
						inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
						dropdownTextStyles={{
							color: Colors[colorScheme ?? "light"].text,
						}}
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Languages</Text>
					<MultipleSelectList
						search={false}
						setSelected={(val: SetStateAction<never[]>) => setLanguage(val)}
						data={dataLanguage}
						placeholder="Select your languages"
						label="Languages"
						save="value"
						searchPlaceholder="Search a language"
						dropdownStyles={styles.input}
						boxStyles={styles.input}
						inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
						dropdownTextStyles={{
							color: Colors[colorScheme ?? "light"].text,
						}}
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Programming Languages</Text>
					<MultipleSelectList
						search={false}
						setSelected={(val: SetStateAction<never[]>) =>
							setProgrammingLanguage(val)
						}
						data={dataProgrammingLanguage}
						placeholder="Select your programming languages"
						label="Programming Languages"
						save="value"
						searchPlaceholder="Search a programming language"
						dropdownStyles={styles.input}
						boxStyles={styles.input}
						inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
						dropdownTextStyles={{
							color: Colors[colorScheme ?? "light"].text,
						}}
					/>
				</View>
				<View style={styles.formContent}>
					<Text style={styles.title}>Post</Text>
					<SelectList
						data={dataPost}
						setSelected={setPost}
						placeholder="Select your post"
						searchPlaceholder="Search a post"
						dropdownStyles={styles.input}
						boxStyles={styles.input}
						inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
						dropdownTextStyles={{
							color: Colors[colorScheme ?? "light"].text,
						}}
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
