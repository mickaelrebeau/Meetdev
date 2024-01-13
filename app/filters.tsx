import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import RNPickerSelect from "react-native-picker-select";

export default function Filters() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Filters by technologies</Text>
			<RNPickerSelect
                darkTheme
                style={pickerSelectStyles}
				placeholder={{ label: "Select technologies", value: null }}
				onValueChange={(value) => console.log(value)}
				items={[
					{ label: "JavaScript", value: "JavaScript" },
					{ label: "TypeScript", value: "TypeScript" },
					{ label: "Python", value: "Python" },
					{ label: "Java", value: "Java" },
					{ label: "C++", value: "C++" },
					{ label: "C", value: "C" },
				]}
			/>
			<Text style={styles.title}>Filters by contry</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
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