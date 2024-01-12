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
					<Text style={style.title}>Media</Text>
					<View style={style.media}>
						<View style={style.photo} />
					</View>
					<Text style={style.title}>Bio</Text>
					<TextInput
						placeholder="Bio"
						multiline
						numberOfLines={6}
						style={style.bio}
						placeholderTextColor="gray"
					/>
					<Text style={style.title}>Last Name</Text>
					<Input placeholder="Last Name" />
					<Text style={style.title}>First Name</Text>
					<Input placeholder="First Name" />
					<Text style={style.title}>Username</Text>
					<Input placeholder="Username" />
					<Text style={style.title}>Age</Text>
					<Input placeholder="Age" />
					<Text style={style.title}>Country</Text>
					<Input placeholder="Country" />
					<Text style={style.title}>Grade Level</Text>
					<Input placeholder="Grade Level" />
					<Text style={style.title}>Languages</Text>
					<Input placeholder="Languages" />
					<Text style={style.title}>Programming Languages</Text>
					<Input placeholder="Programming Languages" />
					<Text style={style.title}>Post</Text>
					<Input placeholder="Post" />
					<Text style={style.title}>Company</Text>
					<Input placeholder="Company" />
					<Text style={style.title}>Github Url</Text>
					<Input placeholder="Github" />
					<Text style={style.title}>Portfolio Url</Text>
					<Input placeholder="Portfolio" />

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
		marginVertical: 50,
		width: "90%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "transparent",
		gap: 5,
	},
	title: {
		width: "100%",
		fontSize: 20,
		fontWeight: "400",
	},
	bio: {
		padding: 10,
		marginVertical: 5,
		width: "95%",
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
