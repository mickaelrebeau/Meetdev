import {
	Image,
	Pressable,
	SectionList,
	StyleSheet,
	TextInput,
	useColorScheme,
} from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Messages } from "../../constants/Messages";
import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import moment from "moment";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatScreen() {
	const router = useRouter();
	const { id } = useLocalSearchParams();
	const colorScheme = useColorScheme();

	const messages = Messages.find((message) => message.id.toString() === id);

	const formatDate = (date: Date) => {
		return new Intl.DateTimeFormat("en-US", {
			hour: "numeric",
			minute: "numeric",
		}).format(date);
	};

	const groupMessagesByDate = (messages?: {
		chat: Message[];
	}): GroupedMessage[] => {
		const grouped: { [date: string]: Message[] } = {};
		messages?.chat.forEach((message) => {
			const dateStr = moment(message.date).format("LL");
			if (!grouped[dateStr]) {
				grouped[dateStr] = [];
			}
			grouped[dateStr].push(message);
		});
		return Object.keys(grouped).map((date) => ({
			title: date,
			data: grouped[date],
		}));
	};

	const sections = groupMessagesByDate(messages);

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
						source={messages?.imgUrl}
					/>
					<Text
						style={[
							styles.title,
							{ color: Colors[colorScheme ?? "light"].text },
						]}
					>
						{messages?.name}
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
			<View style={styles.chat}>
				<SectionList
					sections={sections}
					keyExtractor={(item, index) => item.toString() + index}
					renderSectionHeader={({ section: { title } }) => (
						<Text style={styles.sectionHeader}>{title}</Text>
					)}
					renderItem={({ item }) => {
						return (
							<>
								<View
									style={{
										flexDirection: item.sender === "me" ? "row-reverse" : "row",
										padding: 10,
										paddingVertical: item.sender === "me" ? 10 : 10,
									}}
								>
									<View style={{ width: "auto", maxWidth: "70%" }}>
										<View
											style={{
												padding: 10,
												borderBottomRightRadius: item.sender === "me" ? 0 : 10,
												borderBottomLeftRadius: item.sender === "me" ? 10 : 0,
												borderRadius: 10,
												backgroundColor:
													item.sender === "me" ? "#3e3e3e" : "#2f95dc",
											}}
										>
											<Text style={styles.text}>{item.content}</Text>
										</View>
										{item.sender && (
											<Text
												style={[
													styles.time,
													{
														textAlign: item.sender === "me" ? "right" : "left",
													},
												]}
											>
												{formatDate(new Date(item.date))}
											</Text>
										)}
									</View>
								</View>
							</>
						);
					}}
				/>
			</View>
			<View
				style={[
					styles.footer,
					{ backgroundColor: Colors[colorScheme ?? "light"].chatBackground },
				]}
			>
				<View style={styles.input}>
					<TextInput placeholder="Write your message here..." />
					<View style={styles.icon}>
						<FontAwesome name="photo" size={24} color="gray" />
						<FontAwesome name="smile-o" size={24} color="gray" />
					</View>
				</View>
				<Pressable style={styles.button}>
					{({ pressed }) => (
						<FontAwesome
							name="send"
							size={20}
							color="white"
							style={[
								styles.button,
								{
									opacity: pressed ? 0.5 : 1,
								},
							]}
						/>
					)}
				</Pressable>
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
	chat: {
		flex: 1,
		width: "100%",
		padding: 10,
		marginBottom: 70,
	},
	sectionHeader: {
		fontWeight: "bold",
		fontSize: 16,
		backgroundColor: "transparent",
		padding: 10,
		marginBottom: 10,
		width: "100%",
		textAlign: "center",
		color: "gray",
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
	text: {
		fontWeight: "400",
		fontSize: 18,
		color: "#fff",
	},
	time: {
		fontWeight: "300",
		fontSize: 12,
		marginTop: 2,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 10,

		position: "absolute",
		bottom: 0,

		width: "100%",
		padding: 15,
		borderTopColor: "#ccc",
		borderTopWidth: 1,
	},
	input: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		width: "85%",

		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 10,
		backgroundColor: "#ccc",
	},
	icon: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 5,

		backgroundColor: "transparent",
	},
	button: {
		padding: 5,
		backgroundColor: "#2f95dc",
		borderRadius: 10,
	},
});
