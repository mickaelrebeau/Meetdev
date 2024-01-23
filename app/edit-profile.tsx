import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	TextInput,
	useColorScheme,
} from "react-native";
import { Text, View } from "../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import {
	MultipleSelectList,
	SelectList,
} from "react-native-dropdown-select-list";
import { SetStateAction, useState } from "react";
import {
	dataCountry,
	dataLanguage,
	dataPost,
	dataProgrammingLanguage,
} from "../constants/Datas";
import { AntDesign, Feather } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";

export default function EditProfile() {
	const colorScheme = useColorScheme();
	const currentUser = auth().currentUser;
	const [image, setImage] = useState<string>(
		"file:///data/user/0/com.dreeman.meetdev/cache/ImagePicker/7f5560e3-1d53-43ea-84f5-93c484c50a92.jpeg"
	);
	const [country, setCountry] = useState<string>("France");
	const [language, setLanguage] = useState<string[]>([]);
	const [programmingLanguage, setProgrammingLanguage] = useState<string[]>([]);
	const [post, setPost] = useState<string>("CEO");
	const [data, setData] = useState<{
		bio: string;
		username: string;
		company: string;
		github_url: string;
		portfolio_url: string;
	}>({
		bio: "Ceci est une bio 🙂...",
		username: "Mike",
		company: "Alt incubateur tech",
		github_url: "https://github.com/mickaelrebeau",
		portfolio_url: "https://mike-dreeman-portfolio.vercel.app/",
	});
	const [filterCountry, setFilterCountry] = useState<string>("");
	const [filterProgrammingLanguage, setFilterProgrammingLanguage] = useState<string[]>([]);
	const [filterPost, setFilterPost] = useState<string[]>([]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [3, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const profileInfos = async (user: FirebaseAuthTypes.User | null) => {
		const filters = {
			country: filterCountry,
			programming_languages: filterProgrammingLanguage,
			post: filterPost,
		};

		db().ref(`users/${user?.uid}`).set({
			image_uri: image,
			bio: data.bio,
			name: data.username,
			country: country,
			languages: language,
			programming_languages: programmingLanguage,
			post: post,
			company: data.company,
			github_url: data.github_url,
			portfolio_url: data.portfolio_url,
			filters: filters,
		});
	};

	const handleSubmit = async () => {
		if (currentUser !== null) {
			await profileInfos(currentUser);

			router.push("/profil");
		}
	};

	return (
		<SafeAreaView style={style.container}>
			<ScrollView
				style={style.scrollView}
				contentContainerStyle={{ alignItems: "center" }}
			>
				<View style={style.form}>
					<Text style={style.title}>Filters</Text>
					<View style={style.filters}>
						<Text style={style.title}>Filters by countries</Text>
						<SelectList
							search={false}
							data={dataCountry}
							setSelected={setFilterCountry}
							placeholder="Select your country"
							searchPlaceholder="Search a country"
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							arrowicon={
								<Feather
									name="chevron-down"
									size={24}
									color={Colors[colorScheme ?? "light"].tint}
								/>
							}
						/>
						<Text style={style.title}>Filters by posts</Text>
						<MultipleSelectList
							search={false}
							setSelected={(val: SetStateAction<string[]>) => setFilterPost(val)}
							data={dataPost}
							placeholder="Select your programming languages"
							label="Programming Languages"
							save="value"
							searchPlaceholder="Search a programming language"
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							checkBoxStyles={{ backgroundColor: "white" }}
							labelStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							arrowicon={
								<Feather
									name="chevron-down"
									size={24}
									color={Colors[colorScheme ?? "light"].tint}
								/>
							}
						/>
						<Text style={style.title}>Filters by technologies</Text>
						<MultipleSelectList
							search={false}
							setSelected={(val: SetStateAction<string[]>) =>
								setFilterProgrammingLanguage(val)
							}
							data={dataProgrammingLanguage}
							placeholder="Select your programming languages"
							label="Programming Languages"
							save="value"
							searchPlaceholder="Search a programming language"
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							checkBoxStyles={{ backgroundColor: "white" }}
							labelStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							arrowicon={
								<Feather
									name="chevron-down"
									size={24}
									color={Colors[colorScheme ?? "light"].tint}
								/>
							}
						/>
					</View>
					<Text style={style.title}>Informations</Text>
					<View style={style.formContent}>
						<Text style={style.title}>Media</Text>
						<View style={style.mediaContainer}>
							<View style={style.media}>
								{image !== null ? (
									<Image source={{ uri: image }} style={style.photo} />
								) : (
									<View style={style.photo} />
								)}
							</View>
							<Pressable
								onPress={pickImage}
								style={({ pressed }) => [
									style.add,
									{
										opacity: pressed ? 0.5 : 1,
									},
								]}
							>
								<AntDesign name="pluscircleo" size={28} color="black" />
							</Pressable>
						</View>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Bio</Text>
						<TextInput
							placeholder="Ceci est une bio haha.."
							multiline
							numberOfLines={6}
							style={[
								style.bio,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholderTextColor="gray"
							value={data.bio}
							onChangeText={(val) => setData({ ...data, bio: val })}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Username</Text>
						<TextInput
							placeholder="Mike_dreeman"
							style={[
								style.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholderTextColor="gray"
							value={data.username}
							onChangeText={(val) => setData({ ...data, username: val })}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Country</Text>
						<SelectList
							data={dataCountry}
							setSelected={setCountry}
							placeholder="Select your country"
							searchPlaceholder="Search a country"
							dropdownStyles={style.input}
							boxStyles={style.input}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Languages</Text>
						<MultipleSelectList
							setSelected={(val: SetStateAction<string[]>) => setLanguage(val)}
							data={dataLanguage}
							placeholder="Select your languages"
							label="Languages"
							save="value"
							searchPlaceholder="Search a language"
							dropdownStyles={style.input}
							boxStyles={style.input}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Programming Languages</Text>
						<MultipleSelectList
							setSelected={(val: SetStateAction<string[]>) =>
								setProgrammingLanguage(val)
							}
							data={dataProgrammingLanguage}
							placeholder="Select your programming languages"
							label="Programming Languages"
							save="value"
							searchPlaceholder="Search a programming language"
							dropdownStyles={style.input}
							boxStyles={style.input}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Post</Text>
						<SelectList
							data={dataPost}
							setSelected={setPost}
							placeholder="Select your post"
							searchPlaceholder="Search a post"
							dropdownStyles={style.input}
							boxStyles={style.input}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Company</Text>
						<TextInput
							placeholder="En recherche d'emploi mdr"
							style={[
								style.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholderTextColor="gray"
							value={data.company}
							onChangeText={(val) => setData({ ...data, company: val })}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Github Url</Text>
						<TextInput
							placeholder="https://github.com/mickaelrebeau"
							style={[
								style.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholderTextColor="gray"
							value={data.github_url}
							onChangeText={(val) => setData({ ...data, github_url: val })}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Portfolio Url</Text>
						<TextInput
							placeholder="https://mike-dreeman-portfolio.vercel.app/"
							style={[
								style.input,
								{ color: Colors[colorScheme ?? "light"].text },
							]}
							placeholderTextColor="gray"
							value={data.portfolio_url}
							onChangeText={(val) => setData({ ...data, portfolio_url: val })}
						/>
					</View>

					<Pressable
						onPress={handleSubmit}
						style={({ pressed }) => [
							style.button,
							{
								opacity: pressed ? 0.5 : 1,
								backgroundColor: Colors[colorScheme ?? "light"].tint,
							},
						]}
					>
						<Text
							style={[
								style.title,
								{
									textAlign: "center",
									color: Colors[colorScheme ?? "light"].background,
								},
							]}
						>
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
	mediaContainer: {
		width: 140,
		height: 140,
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
	add: {
		position: "absolute",
		bottom: 0,
		right: 0,

		padding: 2,
		borderRadius: 50,
		backgroundColor: "white",
	},
	filters: {
		width: "100%",
		gap: 20,
	},
	form: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		width: "100%",
		height: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},
	formContent: {
		width: "100%",
		gap: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
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
		marginVertical: 30,
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
