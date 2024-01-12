import { User as UserInterface, IMessage } from "react-native-gifted-chat";

export const Messages = [
	{
		id: 1,
		name: "L'équipe Meetdev",
		imgUrl: require("../assets/images/meetdev.png"),
		chat: [
			{
				sender: "L'équipe Meetdev",
				content: "Hello there! Welcome to Meetdev !",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 2,
		name: "Mike_dreeman",
		imgUrl: require("../assets/images/mike.png"),
		chat: [
			{
				sender: "Mike_dreeman",
				content: "Hello there!",
				date: new Date("2024-01-01T10:45:00"),
			},
			{
				sender: "Mike_dreeman",
				content: "How are you?",
				date: new Date("2024-01-01T10:46:00"),
			},
			{
				sender: "me",
				content: "Hi",
				date: new Date("2024-01-01T10:50:00"),
			},
			{
				sender: "me",
				content: "I'm good and you?",
				date: new Date("2024-01-01T10:51:00"),
			},
			{
				sender: "Mike_dreeman",
				content: "I'm good too",
				date: new Date("2024-01-05T20:12:00"),
			},
			{
				sender: "me",
				content: "Nice. How old are you?",
				date: new Date("2024-01-05T20:12:00"),
			},
			{
				sender: "Mike_dreeman",
				content: "I'm 29 and you ?",
				date: new Date("2024-01-05T20:13:00"),
			},
			{
				sender: "me",
				content: "I'm 24 😉",
				date: new Date("2024-01-05T20:14:00"),
			},
			{
				sender: "Mike_dreeman",
				content: "Okay. What do you do for a living ?",
				date: new Date("2024-01-05T20:15:00"),
			},
			{
				sender: "me",
				content: "I work as a developer and you ? 💻",
				date: new Date("2024-01-05T20:16:00"),
			},
			{
				sender: "Mike_dreeman",
				content: "I'm a photographer 📸",
				date: new Date("2024-01-05T20:17:00"),
			},
			{
				sender: "me",
				content: "Very nice 👍",
				date: new Date("2024-01-05T20:18:00"),
			},
		],
	},
	{
		id: 3,
		name: "Homer Simpson",
		imgUrl: require("../assets/images/homer.png"),
		chat: [
			{
				sender: "Homer Simpson",
				content: "Trying is the first step towards failure.",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 4,
		name: "FBI",
		imgUrl: require("../assets/images/fbi.png"),
		chat: [
			{
				sender: "FBI",
				content: "We are looking for you bitch !",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 5,
		name: "Elon Musk",
		imgUrl: require("../assets/images/elon.png"),
		chat: [
			{
				sender: "Elon Musk",
				content: "I would like to die on Mars. Just not on impact.",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 6,
		name: "Emmanuel Macron",
		imgUrl: require("../assets/images/macron.png"),
		chat: [
			{
				sender: "Emmanuel Macron",
				content: "We are at War !",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 7,
		name: "Mark Zuckerberg",
		imgUrl: require("../assets/images/mark.png"),
		chat: [
			{
				sender: "Mark Zuckerberg",
				content:
					"I wear the same outfit or, at least, a different copy of it almost every day.",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
	{
		id: 8,
		name: "Naruto Uzumaki",
		imgUrl: require("../assets/images/naruto.png"),
		chat: [
			{
				sender: "Naruto Uzumaki",
				content:
					"A smile is the best way to get away with trouble even if it’s a fake one",
				date: new Date("2024-01-01T10:45:00"),
			},
		],
	},
];

export const convertToGiftedChatFormat = (messagesData: Messages) => {
	const messages: IMessage[] = messagesData.chat.map((message, index) => {
		const isMe = message.sender === "me";

		return {
			_id: index.toString(),
			text: message.content,
			createdAt: message.date,
			user: {
				_id: isMe ? "1" : "2",
				name: isMe ? "me" : message.sender,
				avatar: isMe ? undefined : messagesData.imgUrl,
			}
		};
	});

	return messages;
};