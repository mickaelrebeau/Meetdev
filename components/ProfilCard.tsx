import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Card } from "@rneui/themed";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ProfilCard(user: User) {
	return (
		<Card containerStyle={styles.card}>
			<View
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: "transparent",
				}}
			>
				<Image style={styles.image} source={user.image} />
				<View style={{ backgroundColor: "transparent", width: "100%" }}>
					<Text
						style={{
							color: "black",
							fontWeight: "bold",
							fontSize: 30,
							textAlign: "center",
						}}
					>
						{user.username}
					</Text>
					<Text
						style={{
							color: "black",
							fontWeight: "300",
							fontSize: 20,
							textAlign: "center",
						}}
					>
						{user.post}
					</Text>
					<Text
						style={{
							color: "black",
							fontWeight: "300",
							fontSize: 20,
							textAlign: "center",
						}}
					>
						At {user.company}
					</Text>
				</View>
			</View>
			<Text style={{ minHeight: 60, marginVertical: 30, color: "gray" }}>
				{user.bio}
			</Text>
			<View
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
					backgroundColor: "transparent",
					gap: 5,
				}}
			>
				{user.tags.map((tag) => (
					<Text
						key={tag}
						style={{
							borderWidth: 1,
							borderColor: "gray",
							borderRadius: 50,
							paddingHorizontal: 10,
							paddingVertical: 3,
							color: "gray",
							fontWeight: "400",
						}}
					>
						{tag}
					</Text>
				))}
			</View>
			<View style={styles.links}>
				{user.github_url && (
					<Pressable
						onPress={() =>
							router.push(
								`https://${user.github_url.replace(/^https?:\/\//, "")}`
							)
						}
						style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
					>
						<AntDesign name="github" size={24} color="black" />
					</Pressable>
				)}
				{user.portfolio_url && (
					<Pressable
						onPress={() =>
							router.push(
								`https://${user.portfolio_url.replace(/^https?:\/\//, "")}`
							)
						}
						style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
					>
						<MaterialCommunityIcons name="web" size={24} color="black" />
					</Pressable>
				)}
			</View>
		</Card>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		width: "100%",
		height: "100%",
		marginVertical: 10,

		borderRadius: 15,

		display: "flex",
		justifyContent: "space-between",
		flexDirection: "column",
		gap: 10,
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: "#2f95dc",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	links: {
		marginTop: 30,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		gap: 10,

		backgroundColor: "transparent",
	},
});
