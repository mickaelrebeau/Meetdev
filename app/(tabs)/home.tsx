import { Image, Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { Card } from '@rneui/themed';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
		<View style={styles.container}>
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
					<Image
						style={{ width: 150, height: 150 }}
						source={require("../../assets/images/mike.png")}
					/>
					<View style={{ backgroundColor: "transparent", width: "100%" }}>
						<Text
							style={{
								color: "black",
								fontWeight: "bold",
								fontSize: 30,
								textAlign: "center",
							}}
						>
							Mike_dreeman
						</Text>
						<Text
							style={{
								color: "black",
								fontWeight: "300",
								fontSize: 20,
								textAlign: "center",
							}}
						>
							Développeur Frontend
						</Text>
					</View>
				</View>
				<Text style={{ marginVertical: 30, color: "gray" }}>
					Lorem ipsum dolor sit amet consectetur. Imperdiet urna proin et leo
					sollicitudin facilisi dolor magna. Augue tristique amet faucibus
					dictum enim viverra. Ullamcorper risus felis magna sem risus
					vestibulum mi augue.
				</Text>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						backgroundColor: "transparent",
						gap: 5,
					}}
				>
					<Text
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
						Python
					</Text>
					<Text
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
						Javascript
					</Text>
					<Text
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
						Typescript
					</Text>
					<Text
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
						Java
					</Text>
				</View>
			</Card>

			<View
				style={{
					marginTop: 20,
					padding: 10,
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: 30,
				}}
			>
				<Pressable>
					{({ pressed }) => (
						<Entypo
							name="cross"
							size={24}
							color="white"
							style={{
								opacity: pressed ? 0.5 : 1,
								padding: 20,
								borderWidth: 1,
								borderColor: "gray",
								borderRadius: 50,
							}}
						/>
					)}
				</Pressable>
				<Pressable>
					{({ pressed }) => (
						<AntDesign
							name="exclamation"
							size={24}
							color="white"
							style={{
								opacity: pressed ? 0.5 : 1,
								padding: 5,
								borderWidth: 1,
								borderColor: "gray",
								borderRadius: 50,
							}}
						/>
					)}
				</Pressable>
				<Pressable>
					{({ pressed }) => (
						<FontAwesome
							name="heart"
							size={24}
							color="white"
							style={{
								opacity: pressed ? 0.5 : 1,
								padding: 20,
								borderWidth: 1,
								borderColor: "gray",
								borderRadius: 50,
							}}
						/>
					)}
				</Pressable>
			</View>
		</View>
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
		width: "90%",
		height: "70%",
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
