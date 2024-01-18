import { StyleSheet, useColorScheme } from "react-native";
import { View, Text } from "../components/Themed";
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";
import { dataCountry, dataProgrammingLanguage } from "../constants/Datas";
import { SetStateAction, useState } from "react";
import Colors from "../constants/Colors";

export const Filters = () => {
	const colorScheme = useColorScheme();
	const [country, setCountry] = useState();
	const [programmingLanguage, setProgrammingLanguage] = useState([]);
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Filters by technologies</Text>
			<MultipleSelectList
				setSelected={(val: SetStateAction<never[]>) =>
					setProgrammingLanguage(val)
				}
				data={dataProgrammingLanguage}
				placeholder="Select your programming languages"
				label="Programming Languages"
				save="value"
				searchPlaceholder="Search a programming language"
				inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
				dropdownTextStyles={{
					color: Colors[colorScheme ?? "light"].text,
				}}
			/>
			<Text style={styles.title}>Filters by countries</Text>
			<SelectList
				data={dataCountry}
				setSelected={setCountry}
				placeholder="Select your country"
				searchPlaceholder="Search a country"
				inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
				dropdownTextStyles={{
					color: Colors[colorScheme ?? "light"].text,
				}}
			/>
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
