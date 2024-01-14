import {
	Pressable,
	SafeAreaView,
	StyleSheet,
	TextInput,
	useColorScheme,
} from "react-native";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "@rneui/themed";
import Colors from "../constants/Colors";

export default function EditProfile() {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView style={style.container}>
			<ScrollView
				style={style.scrollView}
				contentContainerStyle={{ alignItems: "center" }}
			>
				<View style={style.form}>
					<View style={style.formContent}>
						<Text style={style.title}>Media</Text>
						<View style={style.media}>
							<View style={style.photo} />
						</View>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Bio</Text>
						<TextInput
							placeholder="Ceci est une bio haha.."
							multiline
							numberOfLines={6}
							style={style.bio}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Username</Text>
						<TextInput
							placeholder="Mike_dreeman"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Country</Text>
						<TextInput
							placeholder="France"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Languages</Text>
						<TextInput
							placeholder="Français, Espagnol, Anglais"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Programming Languages</Text>
						<TextInput
							placeholder="Javascript, Python"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Post</Text>
						<TextInput
							placeholder="Développer Frontend"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Company</Text>
						<TextInput
							placeholder="En recherche d'emploi mdr"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Github Url</Text>
						<TextInput
							placeholder="https://github.com/mickaelrebeau"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Gitlab Url</Text>
						<TextInput
							placeholder="https://gitlab.com/Mike97310"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Portfolio Url</Text>
						<TextInput
							placeholder="https://mike-dreeman-portfolio.vercel.app/"
							style={style.input}
							placeholderTextColor="gray"
						/>
					</View>

					<Pressable style={style.button}>
						<Text style={[style.title, { textAlign: "center" }]}>
							Save Changes
						</Text>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	scrollView: {
		width: "100%",
		height: "auto",
		backgroundColor: "transparent",
		gap: 1,
	},
	media: {
		padding: 10,
		width: "100%",
		display: "flex",
		alignItems: "flex-start",
	},
	photo: {
		width: 120,
		height: 120,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "gray",
        borderStyle: "dashed",
        backgroundColor: "#3e3e3e",
	},
	form: {
		marginVertical: 20,
		width: "90%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		gap: 20,
	},
	formContent: {
		width: "100%",
		gap: 5,
	},
	title: {
		width: "100%",
		fontSize: 20,
		fontWeight: "400",
	},
	input: {
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 8,
	},
	bio: {
		padding: 10,
		width: "100%",
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 8,
	},
	button: {
		width: "100%",
		height: 50,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#2f95dc",
		marginVertical: 20,
	},
});
