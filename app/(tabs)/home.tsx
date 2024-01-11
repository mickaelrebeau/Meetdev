import {
	Pressable,
	StyleSheet,
	useColorScheme,
	useWindowDimensions,
} from "react-native";

import { View } from "../../components/Themed";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import ProfilCard from "../../components/ProfilCard";
import { Users } from "../../constants/Users";
import Animated, {
	interpolate,
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import Colors from "../../constants/Colors";

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [nextIndex, setNextIndex] = useState((currentIndex + 1) % Users.length);
	const currentProfil = Users[currentIndex];
	const nextProfil = Users[nextIndex];
	const { width } = useWindowDimensions();

	const hiddenTranslateCard = 2 * width;

	const sharedValue = useSharedValue(0);
	const rotate = useDerivedValue(
		() =>
			interpolate(sharedValue.value, [0, hiddenTranslateCard], [0, 60]) + "deg"
	);

	const cardStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: sharedValue.value,
			},
			{
				rotate: rotate.value,
			},
		],
	}));
	const nextCardStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(
					sharedValue.value,
					[-hiddenTranslateCard, 0, hiddenTranslateCard],
					[1, 0.95, 1]
				),
			},
		],
		opacity: interpolate(
			sharedValue.value,
			[-hiddenTranslateCard, 0, hiddenTranslateCard],
			[1, 0.6, 1]
		),
	}));

	const likeStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			sharedValue.value,
			[0, hiddenTranslateCard / 5],
			[0, 1]
		),
	}));

	const rejectStyle = useAnimatedStyle(() => ({
		opacity: interpolate(
			sharedValue.value,
			[0, -hiddenTranslateCard / 5],
			[0, 1]
		),
	}));

	const gestureHandler = useAnimatedGestureHandler({
		onActive: (event) => {
			sharedValue.value = event.translationX;
		},
		onEnd: (event) => {
			if (Math.abs(event.velocityX) < 800) {
				sharedValue.value = withSpring(0);
				return;
			}

			sharedValue.value = withSpring(
				hiddenTranslateCard * Math.sign(event.velocityX)
			);

			runOnJS(setCurrentIndex)((currentIndex + 1) % Users.length);
		},
	});

	const handleLike = () => {
		sharedValue.value = withSpring(
			hiddenTranslateCard,
			{ damping: 3000 },
			() => {
				runOnJS(setCurrentIndex)((currentIndex + 1) % Users.length);
			}
		);
	};

	const handleReject = () => {
		sharedValue.value = withSpring(
			-hiddenTranslateCard,
			{ damping: 3000 },
			() => {
				runOnJS(setCurrentIndex)((currentIndex + 1) % Users.length);
			}
		);
	};

	useEffect(() => {
		sharedValue.value = 0;
		setNextIndex((currentIndex + 1) % Users.length);
	}, [currentIndex]);

	return (
		<View style={styles.container}>
			{nextProfil && (
				<View style={styles.nextCard}>
					<Animated.View style={[styles.card, nextCardStyle]}>
						<ProfilCard key={nextProfil.id} {...nextProfil} />
					</Animated.View>
				</View>
			)}

			{currentProfil && (
				<PanGestureHandler onGestureEvent={gestureHandler}>
					<Animated.View style={[styles.card, cardStyle]}>
						<Animated.View
							style={[
								styles.cardGesture,
								{ backgroundColor: "green" },
								likeStyle,
							]}
						>
							<Animated.Image
								source={require("../../assets/images/like-icon.png")}
								style={[styles.like, { left: 5 }]}
							/>
						</Animated.View>
						<Animated.View
							style={[
								styles.cardGesture,
								{ backgroundColor: "red" },
								rejectStyle,
							]}
						>
							<Animated.Image
								source={require("../../assets/images/rejected-icon.png")}
								style={[styles.like, { right: 5 }]}
							/>
						</Animated.View>
						<ProfilCard key={currentProfil.id} {...currentProfil} />
					</Animated.View>
				</PanGestureHandler>
			)}

			<View style={styles.buttons}>
				<Pressable onPress={handleReject}>
					{({ pressed }) => (
						<Fontisto
							name="plus-a"
							size={28}
							color={Colors[colorScheme ?? "light"].tint}
							style={[
								styles.button,
								{
									opacity: pressed ? 0.5 : 1,
									transform: [{ rotate: "45deg" }],
								},
							]}
						/>
					)}
				</Pressable>
				<Pressable>
					{({ pressed }) => (
						<AntDesign
							name="exclamation"
							size={28}
							color={Colors[colorScheme ?? "light"].tint}
							style={[
								styles.buttonCenter,
								{
									opacity: pressed ? 0.5 : 1,
								},
							]}
						/>
					)}
				</Pressable>
				<Pressable onPress={handleLike}>
					{({ pressed }) => (
						<AntDesign
							name="heart"
							size={28}
							color={Colors[colorScheme ?? "light"].tint}
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	nextCard: {
		...StyleSheet.absoluteFillObject,
		top: -55,
		width: "100%",
		height: "100%",

		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		width: "90%",
		height: "70%",

		justifyContent: "center",
		alignItems: "center",
	},
	cardGesture: {
		...StyleSheet.absoluteFillObject,
		top: 5,

		width: "100%",
		height: "100%",

		zIndex: 1,
		elevation: 1,

		borderRadius: 15,

		justifyContent: "center",
		alignItems: "center",
	},
	like: {
		position: "absolute",
		top: 10,

		width: 150,
		height: 150,
	},
	buttons: {
		marginTop: 20,
		padding: 10,

		backgroundColor: "transparent",

		display: "flex",
		flexDirection: "row",
		alignItems: "center",

		gap: 30,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		borderWidth: 2,
		borderColor: "#2f95dc",
		borderRadius: 100,
	},
	buttonCenter: {
		padding: 12,
		borderWidth: 2,
		borderColor: "#2f95dc",
		borderRadius: 100,
	},
});
