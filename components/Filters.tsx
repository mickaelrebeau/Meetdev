import { StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "../components/Themed";
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";
import { dataCountry, dataPost, dataProgrammingLanguage } from "../constants/Datas";
import { SetStateAction, useState } from "react";
import Colors from "../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Filters = () => {
	const colorScheme = useColorScheme();
	const [country, setCountry] = useState();
	const [programmingLanguage, setProgrammingLanguage] = useState([]);
	const [post, setPost] = useState([]);
	
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
					setSelected={(val: SetStateAction<never[]>) => setPost(val)}
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
					setSelected={(val: SetStateAction<never[]>) =>
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
});
