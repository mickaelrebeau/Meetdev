import { Image, StyleSheet, useColorScheme } from "react-native";
import { ListItem } from "@rneui/themed";
import Colors from "../constants/Colors";
import { router } from "expo-router";

export const MessageList = (messages: Messages) => {
	const colorScheme = useColorScheme();

	const getLatestMessage = () => {
		const receivedMessages = messages.messages_received || [];
		const sentMessages = messages.messages_send || [];
		const allMessages = [...receivedMessages, ...sentMessages];

		const latestMessage = allMessages.reduce(
			(latest: Message | null, current: Message) => {
				const currentDateTime = new Date(current.date).getTime();
				const latestDateTime = latest ? new Date(latest.date).getTime() : 0;

				return currentDateTime > latestDateTime ? current : latest;
			},
			null
		);

		return latestMessage ? latestMessage.content : "";
	};

	const navigateToChat = () => {
		router.replace(`/chat/${messages.id}`);
	};

	return (
		<ListItem containerStyle={styles.listItem} onPress={navigateToChat}>
			<Image style={styles.image} source={messages.imgUrl} />
			<ListItem.Content style={styles.listContent}>
				<ListItem.Title
					style={[styles.title, { color: Colors[colorScheme ?? "light"].text }]}
				>
					{messages.name}
				</ListItem.Title>
				<ListItem.Subtitle
					style={[
						styles.subtitle,
						{ color: Colors[colorScheme ?? "light"].text },
					]}
				>
					{getLatestMessage().length > 45
						? getLatestMessage().slice(0, 45) + "..."
						: getLatestMessage()}
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#2f95dc",
	},
	listItem: {
		backgroundColor: "transparent",
	},
	listContent: {
		paddingBottom: 10,
		gap: 5,
		borderBottomColor: "gray",
		borderBottomWidth: 1,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	subtitle: {
		fontWeight: "300",
		fontSize: 14,
	},
});
