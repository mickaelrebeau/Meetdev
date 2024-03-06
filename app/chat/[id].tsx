import { Image, Pressable, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Messages, convertToGiftedChatFormat } from "../../constants/Messages";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import {
	GiftedChat,
	IMessage,
} from "react-native-gifted-chat";
import { useCallback, useContext, useEffect, useState } from "react";
import { RenderSend } from "../../components/SendButton";
import { ScrollBottom } from "../../components/ScrollBottom";
import { SocketContext } from "../context/SocketContext";

export default function ChatScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams();
	const colorScheme = useColorScheme();
	const { socket } = useContext(SocketContext);

	const data = Messages.find((message) => message.id.toString() === id);
	const giftedChatMessages = data && convertToGiftedChatFormat(data).reverse();

	const [messages, setMessages] = useState<IMessage[]>([]);

	useEffect(() => {
		if (socket) {
			socket.on("receive_message", (message) => {
				setMessages((previousMessages) =>
					GiftedChat.append(previousMessages, message)
				);
			});
		}

		return () => {
			if (socket) {
				socket.off("receive_message");
			}
		}
	}, [socket]);

	const onSend = useCallback((messages: IMessage[]) => {
		const text = messages[0].text.trim();

		if (text && socket) {
			socket.emit("send_message", text, (acklowlegdgment: any) => {
				console.log("Message envoyé avec succès: ", acklowlegdgment);
			});
		}

		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, [socket]);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={[
					styles.header,
					{ backgroundColor: Colors[colorScheme ?? "light"].chatBackground },
				]}
			>
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
				<View style={styles.name}>
					<Image
						style={[styles.image, { width: 40, height: 40 }]}
						source={data?.imgUrl}
					/>
					<Text
						style={[
							styles.title,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
					>
						{data?.name}
					</Text>
				</View>
				<Pressable>
					<SimpleLineIcons
						name="options-vertical"
						size={24}
						color={Colors[colorScheme ?? "light"].tint}
					/>
				</Pressable>
			</View>
			<GiftedChat
				alwaysShowSend
				scrollToBottom
				scrollToBottomComponent={ScrollBottom}
				renderSend={RenderSend}
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		padding: 10,
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	name: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,

		backgroundColor: "transparent",
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
		color: "#fff",
	},
});
