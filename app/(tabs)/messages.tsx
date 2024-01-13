import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Messages } from "../../constants/Messages";
import { MessageList } from "../../components/MessageList";
import { FlatList } from "react-native";

export default function MessagesScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.match}>
				<Text style={styles.title}>Matches</Text>
				<ScrollView horizontal contentContainerStyle={styles.images}>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/homer.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/fbi.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/elon.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/macron.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/mark.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/naruto.png")}
					/>
				</ScrollView>
			</View>
			<View style={styles.match}>
				<Text style={styles.title}>Messages</Text>
				<FlatList
					data={Messages}
					renderItem={({ item }) => <MessageList {...item} />}
					contentContainerStyle={{ paddingBottom: 200 }}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",

		flex: 1,
		alignItems: "center",
		gap: 20,

		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	match: {
		width: "100%",
	},
	images: {
		marginTop: 20,
		paddingHorizontal: 10,

		gap: 10,
	},
	image: {
		width: 80,
		height: 80,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#2f95dc",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
