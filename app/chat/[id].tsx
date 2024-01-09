import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Messages } from "../../constants/Messages";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default function ChatScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams();
	const colorScheme = useColorScheme();

	const messages = Messages.find((message) => message.id.toString() === id);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Pressable
					onPress={() => router.push("/messages")}
					style={{ flexDirection: "row", alignItems: "center" }}
				>
					<Ionicons
						name="arrow-back"
						size={24}
						color={Colors[colorScheme ?? "light"].tint}
					/>
				</Pressable>
				<Text style={styles.title}>{messages?.name}</Text>
				<Pressable>
					<SimpleLineIcons
						name="options-vertical"
						size={24}
						color={Colors[colorScheme ?? "light"].tint}
					/>
				</Pressable>
			</View>
			<View style={styles.chat}>
				<View style={styles.received}>
					<Image style={styles.image} source={messages?.imgUrl} />
					<Text>{messages?.messages_received[0].content}</Text>
				</View>
				<View style={styles.send}>
					<Text>{messages?.messages_send[0].content ?? ""}</Text>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		padding: 10,
		backgroundColor: "#3e3e3e",
	},
	chat: {
		flex: 1,
		width: "100%",
		padding: 10,
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#2f95dc",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	received: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		gap: 10,
		padding: 10,
	},
	send: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 10,
		padding: 10,
	},
});
