import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { View, Text } from "../components/Themed";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { router } from "expo-router";
import Colors from "../constants/Colors";
import { AddBio, AddFiltersPreference, AddPhoto, AddProfileInfo } from "../components/signup-step";

export default function SignUpStep() {
	const colorScheme = useColorScheme();

	const steps = [
		<AddPhoto />,
		<AddProfileInfo />,
		<AddBio />,
		<AddFiltersPreference />,
	];

	const [currentStep, setCurrentStep] = useState(0);
	const isFinished = currentStep === steps.length - 1;

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handlePrev = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.card}>
				<View style={styles.header}>
					<Text style={styles.title}>
						Step {currentStep + 1} Of {steps.length}
					</Text>
				</View>
				<View style={styles.body}>
					<View style={{ height: "80%" }}>{steps[currentStep]}</View>
					<View
						style={
							currentStep > 0
								? styles.buttons
								: {
										flex: 1,
										alignItems: "flex-end",
										justifyContent: "center",
										marginRight: 20,
								  }
						}
					>
						{currentStep > 0 && (
							<Pressable
								onPress={handlePrev}
								style={({ pressed }) => [
									styles.button,
									{
										opacity: pressed ? 0.5 : 1,
										color: Colors[colorScheme ?? "light"].text,
									},
								]}
							>
								<Text style={styles.title}>Previous</Text>
							</Pressable>
						)}

						{isFinished ? (
							<Pressable
								onPress={() => router.push("/home")}
								style={({ pressed }) => [
									styles.button,
									{
										opacity: pressed ? 0.5 : 1,
										color: Colors[colorScheme ?? "light"].text,
									},
								]}
							>
								<Text style={styles.title}>Finish</Text>
							</Pressable>
						) : (
							<Pressable
								onPress={handleNext}
								style={({ pressed }) => [
									styles.button,
									{
										opacity: pressed ? 0.5 : 1,
										color: Colors[colorScheme ?? "light"].text,
									},
								]}
							>
								<Text style={styles.title}>Next</Text>
							</Pressable>
						)}
					</View>
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
	buttons: {
		padding: 20,
		width: "100%",
		height: 100,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	button: {
		padding: 20,
		borderBottomWidth: 1,
		borderColor: "#2f95dc",
	},
});
