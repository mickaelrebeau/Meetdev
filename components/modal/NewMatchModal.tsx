import {
	StyleSheet,
	Image,
	Modal,
	Pressable,
	useColorScheme,
	useWindowDimensions,
} from "react-native";
import { View, Text } from "../Themed";
import Colors from "../../constants/Colors";
import Animated, {
	interpolate,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
import { LogoSvg } from "../../assets/images/LogoSvg";

export const NewMatch = ({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: (value: boolean) => void;
}) => {
	const colorScheme = useColorScheme();
	const sharedValue = useSharedValue(0);
	const { width } = useWindowDimensions();

	const translateWidth = width;

	const leftTranslate = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: interpolate(
					sharedValue.value,
					[-translateWidth, 0],
					[1, 0]
				),
			},
		],
	}));

	return (
		<Modal
			style={styles.modal}
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.container}>
				<View style={styles.logo}>
					<LogoSvg style={{ marginLeft: 15 }} />
					<Text style={styles.title}>Meetdev</Text>
				</View>
				<Text style={[styles.title, { textAlign: "center", fontSize: 36 }]}>
					Congratulation !
				</Text>
				<Text style={[styles.title, { textAlign: "center", fontSize: 28 }]}>
					It's a match !
				</Text>
				<Animated.View style={styles.profiles}>
					<Animated.View style={leftTranslate}>
						<Image
							style={{ width: 100, height: 100 }}
							source={require("../../assets/images/mike.png")}
						/>
					</Animated.View>
					<Animated.View>
						<Image
							style={{ width: 100, height: 100 }}
							source={require("../../assets/images/homer.png")}
						/>
					</Animated.View>
				</Animated.View>
				<Image
					style={{ width: "100%", height: 300 }}
					source={require("../../assets/images/canards.png")}
				/>
				<View style={styles.buttons}>
					<Pressable
						onPress={() => setModalVisible(!modalVisible)}
						style={({ pressed }) => [
							styles.button,
							{
								opacity: pressed ? 0.5 : 1,
								backgroundColor: Colors[colorScheme ?? "light"].tint,
							},
						]}
					>
						<Text style={[styles.title, { color: "black" }]}>
							Send a message
						</Text>
					</Pressable>
					<Pressable
						onPress={() => setModalVisible(!modalVisible)}
						style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
					>
						<Text style={[styles.title, { textAlign: "center" }]}>
							Continue to like
						</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		padding: 20,
		width: "100%",
		height: "100%",

		flex: 1,
		justifyContent: "center",
		gap: 30,
	},
	logo: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	profiles: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	buttons: {
		gap: 20,
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
