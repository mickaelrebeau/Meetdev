import { Image, StyleSheet } from "react-native";

import { Text, View } from "./Themed";
import { Card } from "@rneui/themed";

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
				<Image style={{ width: 150, height: 150 }} source={user.image} />
				<View style={{ backgroundColor: "transparent", width: "100%" }}>
					<Text
						style={{
							color: "black",
							fontWeight: "bold",
							fontSize: 30,
							textAlign: "center",
						}}
					>
						{user.name}
					</Text>
					<Text
						style={{
							color: "black",
							fontWeight: "300",
							fontSize: 20,
							textAlign: "center",
						}}
					>
						{user.job}
					</Text>
				</View>
			</View>
			<Text style={{ marginVertical: 30, color: "gray" }}>{user.bio}</Text>
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
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
