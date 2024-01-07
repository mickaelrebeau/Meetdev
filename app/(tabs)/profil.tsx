import { Pressable, StyleSheet, useColorScheme } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";

export default function ProfilScreen() {
	const router = useRouter();
	const colorScheme = useColorScheme();
	
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profil</Text>
			<Pressable
				onPress={() => router.push("/hero")}
				style={({ pressed }) => [
					styles.button,
					{
						opacity: pressed ? 0.5 : 1,
						backgroundColor: Colors[colorScheme ?? "light"].tint,
					},
				]}
			>
				<Text
					style={[
						styles.textButton,
						{ color: "black" },
					]}
				>
					Go to Hero Screen
				</Text>
			</Pressable>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="app/(tabs)/profil.tsx" />
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
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	textButton: {
		fontSize: 20,
		fontWeight: "500",
	},
	button: {
		width: "90%",
		paddingVertical: 15,

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		borderWidth: 1,
		borderRadius: 50,
		borderColor: "transparent",
	},
});
