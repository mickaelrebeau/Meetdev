import { Alert, Pressable, StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "../components/Themed";
import { dataCountry, dataPost, dataProgrammingLanguage } from "../constants/Datas";
import { SetStateAction, useState } from "react";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import SelectList from "./SelectList";
import MultipleSelectList from "./MultipleSelectList";

export const Filters = () => {
	const colorScheme = useColorScheme();
	const [country, setCountry] = useState<string>("");
	const [programmingLanguage, setProgrammingLanguage] = useState<string[]>([]);
	const [post, setPost] = useState<string[]>([]);

	const handleSubmit = async () => {
		Alert.alert('test', 'hello');
	};
	
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.title}>Filters by countries</Text>
				<SelectList
					search={false}
					data={dataCountry}
					setSelected={setCountry}
					placeholder="Select your country"
					searchPlaceholder="Search a country"
					inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
					dropdownTextStyles={{
						color: Colors[colorScheme ?? "light"].text,
					}}
					arrowicon={
						<Feather
							name="chevron-down"
							size={24}
							color={Colors[colorScheme ?? "light"].tint}
						/>
					}
				/>
				<Text style={styles.title}>Filters by posts</Text>
				<MultipleSelectList
					search={false}
					setSelected={(val: SetStateAction<string[]>) => setPost(val)}
					data={dataPost}
					placeholder="Select your programming languages"
					label="Programming Languages"
					save="value"
					searchPlaceholder="Search a programming language"
					inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
					checkBoxStyles={{ backgroundColor: "white" }}
					labelStyles={{
						color: Colors[colorScheme ?? "light"].text,
					}}
					dropdownTextStyles={{
						color: Colors[colorScheme ?? "light"].text,
					}}
					arrowicon={
						<Feather
							name="chevron-down"
							size={24}
							color={Colors[colorScheme ?? "light"].tint}
						/>
					}
				/>
				<Text style={styles.title}>Filters by technologies</Text>
				<MultipleSelectList
					search={false}
					setSelected={(val: SetStateAction<string[]>) =>
						setProgrammingLanguage(val)
					}
					data={dataProgrammingLanguage}
					placeholder="Select your programming languages"
					label="Programming Languages"
					save="value"
					searchPlaceholder="Search a programming language"
					inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
					checkBoxStyles={{ backgroundColor: "white" }}
					labelStyles={{
						color: Colors[colorScheme ?? "light"].text,
					}}
					dropdownTextStyles={{
						color: Colors[colorScheme ?? "light"].text,
					}}
					arrowicon={
						<Feather
							name="chevron-down"
							size={24}
							color={Colors[colorScheme ?? "light"].tint}
						/>
					}
				/>
				<View style={styles.buttons}>
					<Pressable
						onPress={handleSubmit}
						style={({ pressed }) => [
							{ opacity: pressed ? 0.5 : 1 },
							styles.button,
						]}
					>
						<Text>Apply</Text>
					</Pressable>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingBottom: 20,
		flex: 1,
		gap: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "400",
	},
	buttons: {
		width: "100%",
		marginTop: 20,
		alignItems: "center",
		flexDirection: "column",
		gap: 10,
	},
	button: {
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
