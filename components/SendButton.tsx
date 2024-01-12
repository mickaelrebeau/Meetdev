import { IMessage, Send, SendProps } from "react-native-gifted-chat";
import { View } from "./Themed";
import { Ionicons } from "@expo/vector-icons";

export const RenderSend = (props: SendProps<IMessage>) => {
	return (
		<Send {...props}>
			<View
				style={{
					backgroundColor: "transparent",
				}}
			>
				<Ionicons
					name="send"
					size={24}
					style={{
						marginRight: 10,
						marginBottom: 10,
						backgroundColor: "transparent",
					}}
					color="#2f95dc"
				/>
			</View>
		</Send>
	);
};
