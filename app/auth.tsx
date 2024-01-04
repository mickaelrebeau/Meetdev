import {
	Pressable,
	StyleSheet,
} from "react-native";

import { Text, View } from "../components/Themed";
import { CheckBox, Input, Tab, TabView } from "@rneui/themed";
import { LogoSvg } from "../assets/images/LogoSvg";
import React from "react";

export default function AuthScreen() {
    const [index, setIndex] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
	const toggleCheckbox = () => setChecked(!checked);
    
	return (
		<>
			<View style={styles.logo}>
				<LogoSvg />
				<Text style={styles.titleLogo}>Meetdev</Text>
			</View>
			<Tab
				style={{ marginTop: 20 }}
				value={index}
				onChange={(e) => setIndex(e)}
				indicatorStyle={{
					backgroundColor: "white",
					height: 2,
				}}
			>
				<Tab.Item
					title="Se connecter"
					titleStyle={{ fontSize: 24, color: "white" }}
				/>
				<Tab.Item
					title="S'inscrire"
					titleStyle={{ fontSize: 24, color: "white" }}
				/>
			</Tab>

			<TabView value={index} onChange={setIndex} animationType="spring">
				<TabView.Item
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View style={styles.form}>
						<Text style={styles.label}>Email</Text>
						<Input style={styles.input} placeholder="email@example.fr" />

						<Text style={styles.label}>Mot de passe</Text>
						<Input placeholder="@Exemple123" secureTextEntry />

						<Pressable
							onPress={() => {}}
							style={({ pressed }) => [
								styles.button,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.textButton}>Connexion</Text>
						</Pressable>
					</View>
				</TabView.Item>

				<TabView.Item
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<View style={styles.form}>
						<Text style={styles.label}>Pseudo</Text>
						<Input style={styles.input} placeholder="Exemple123" />

						<Text style={styles.label}>Email</Text>
						<Input style={styles.input} placeholder="email@exemple.fr" />

						<Text style={styles.label}>Confirmation d'email</Text>
						<Input style={styles.input} placeholder="email@exemple.fr" />

						<Text style={styles.label}>Mot de passe</Text>
						<Input placeholder="@Exemple123" secureTextEntry />

						<Text style={styles.label}>Confirmation de mot de passe</Text>
						<Input placeholder="@Exemple123" secureTextEntry />

						<CheckBox
							containerStyle={styles.checkbox}
							title="J'accepte les termes et les conditions d'utilisation"
							checked={checked}
							onPress={toggleCheckbox}
						/>

						<Pressable
							onPress={() => {}}
							style={({ pressed }) => [
								styles.button,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<Text style={styles.textButton}>Inscription</Text>
						</Pressable>
					</View>
				</TabView.Item>
			</TabView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around",
		resizeMode: "cover",
	},
	logo: {
		marginTop: 50,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		backgroundColor: "transparent",
	},
	titleLogo: {
		fontSize: 30,
		fontWeight: "bold",
	},
	form: {
		marginVertical: 50,
		width: "80%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		gap: 10,
	},
	label: {
		width: "100%",
		marginBottom: 5,
		fontSize: 16,
		fontWeight: "400",
		textAlign: "left",
	},
	input: {
		padding: 10,
		height: 40,
		borderBottomWidth: 2,
	},
	button: {
		marginTop: 50,

		width: "100%",
		paddingVertical: 15,

		backgroundColor: "transparent",
		borderWidth: 1,
		borderRadius: 50,
		borderColor: "white",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	textButton: {
		fontSize: 20,
		fontWeight: "500",
	},
	checkbox: {
		backgroundColor: "transparent",
		gap: 5,
		width: "100%",
	},
});
