import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import { Picker } from "@react-native-picker/picker";
import { useRef, useState } from "react";

export default function Filters() {
	const [selectedLanguage, setSelectedLanguage] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState([]);

	const pickerRef = useRef();

	function open() {
		pickerRef.current.focus();
	}

	function close() {
		pickerRef.current.blur();
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Filters by technologies</Text>
			<Picker
				ref={pickerRef}
				prompt="Select a language"
				style={styles.picker}
				selectedValue={selectedLanguage}
				onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
			>
				<Picker.Item label="Java" value="java" />
				<Picker.Item label="JavaScript" value="js" />
				<Picker.Item label="Python" value="python" />
			</Picker>
			<Text style={styles.title}>Filters by country</Text>
			<Picker
				ref={pickerRef}
				prompt="Select a country"
				style={styles.picker}
				selectedValue={selectedCountry}
				onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
			>
				<Picker.Item label="France" value="java" />
				<Picker.Item label="Japon" value="js" />
				<Picker.Item label="Allemagne" value="python" />
			</Picker>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		flex: 1,
		alignItems: "center",
		gap: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	picker: {
		width: "90%",
		height: 50,
		backgroundColor: "#fff",
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 4,
		color: "black",
		paddingRight: 30,
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: "purple",
		borderRadius: 8,
		color: "black",
		paddingRight: 30,
	},
});
