import {
	Alert,
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
import { SetStateAction, useEffect, useState } from "react";
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
import SelectList from "../components/SelectList";
import MultipleSelectList from "../components/MultipleSelectList";

export default function EditProfile() {
	const colorScheme = useColorScheme();
	const currentUser = auth().currentUser;
	const [country, setCountry] = useState<string>("");
	const [language, setLanguage] = useState<string[]>([]);
	const [programmingLanguage, setProgrammingLanguage] = useState<string[]>([]);
	const [post, setPost] = useState<string>("");
	const [data, setData] = useState<{
		image_uri: string;
		bio: string;
		username: string;
		company: string;
		github_url: string;
		portfolio_url: string;
	}>({
		image_uri: "",
		bio: "",
		username: "",
		company: "",
		github_url: "",
		portfolio_url: "",
	});
	const [filterCountry, setFilterCountry] = useState<string>("");
	const [filterProgrammingLanguage, setFilterProgrammingLanguage] =
		useState<string[]>([]);
	const [filterPost, setFilterPost] = useState<string[]>([]);

	const getDatas = async (user: FirebaseAuthTypes.User | null) => {
		db()
			.ref(`users/${user?.uid}`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setData({
					image_uri: value?.image_uri ?? "",
					bio: value?.bio ?? "",
					username: value?.name ?? "",
					company: value?.company ?? "",
					github_url: value?.github_url ?? "",
					portfolio_url: value?.portfolio_url ?? "",
				});
				setCountry(value?.country ?? "");
				setPost(value?.post ?? "");
				setFilterCountry(value?.filters?.country ?? "");
			});

		db()
			.ref(`users/${user?.uid}/filters/post`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setFilterPost(Object.values(value ?? []));
			});
		
		db()
			.ref(`users/${user?.uid}/filters/programming_languages`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setFilterProgrammingLanguage(Object.values(value ?? []));
			});
		
		db()
			.ref(`users/${user?.uid}/languages`)
			.on("value", (snapshot) => {
				const value = snapshot.val();
				
				setLanguage(Object.values(value ?? []));
			});
		
		db()
			.ref(`users/${user?.uid}/programming_languages`)
			.on("value", (snapshot) => {
				const value = snapshot.val();

				setProgrammingLanguage(Object.values(value ?? []));
			});
	};

	useEffect(() => {
		if (currentUser !== null) {
			getDatas(currentUser);
		}
	}, [currentUser]);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [3, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setData({
				...data,
				image_uri: result.assets[0].uri,
			});
		}
	};

	const profileInfos = async (user: FirebaseAuthTypes.User | null) => {
		const filters = {
			country: filterCountry,
			programming_languages: filterProgrammingLanguage,
			post: filterPost,
		};

		db().ref(`users/${user?.uid}`).set({
			image_uri: data.image_uri,
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
							dropdownStyles={style.input}
							boxStyles={style.input}
							defaultOption={{ key: filterCountry, value: filterCountry }}
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
							setSelected={(val: SetStateAction<string[]>) =>
								setFilterPost(val)
							}
							data={dataPost}
							placeholder="Select your programming languages"
							label="Programming Languages"
							searchPlaceholder="Search a programming language"
							dropdownStyles={style.input}
							boxStyles={style.input}
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
						<View style={style.tagcontainer}>
							{filterPost && filterPost.length > 0 ? (
								filterPost.map((el) => <Text style={style.tag}>{el}</Text>)
							) : (
								<Text>No data.</Text>
							)}
						</View>
						<Text style={style.title}>Filters by technologies</Text>
						<MultipleSelectList
							search={false}
							setSelected={(val: SetStateAction<string[]>) =>
								setFilterProgrammingLanguage(val)
							}
							data={dataProgrammingLanguage}
							placeholder="Select your programming languages"
							label="Programming Languages"
							searchPlaceholder="Search a programming language"
							dropdownStyles={style.input}
							boxStyles={style.input}
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
						<View style={style.tagcontainer}>
							{filterProgrammingLanguage &&
							filterProgrammingLanguage.length > 0 ? (
								filterProgrammingLanguage.map((el) => (
									<Text style={style.tag}>{el}</Text>
								))
							) : (
								<Text>No data.</Text>
							)}
						</View>
					</View>
					<Text style={style.title}>Informations</Text>
					<View style={style.formContent}>
						<Text style={style.title}>Media</Text>
						<View style={style.mediaContainer}>
							<View style={style.media}>
								{data.image_uri !== null ? (
									<Image source={{ uri: data.image_uri }} style={style.photo} />
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
							defaultOption={{ key: country, value: country }}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
						/>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Languages</Text>
						<MultipleSelectList
							search={false}
							setSelected={(val: SetStateAction<string[]>) => setLanguage(val)}
							data={dataLanguage}
							placeholder="Select your languages"
							label="Languages"
							searchPlaceholder="Search a language"
							dropdownStyles={style.input}
							boxStyles={style.input}
							checkBoxStyles={{ backgroundColor: "white" }}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
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
						<View style={style.tagcontainer}>
							{language && language.length > 0 ? (
								language.map((el) => <Text style={style.tag}>{el}</Text>)
							) : (
								<Text>No data.</Text>
							)}
						</View>
					</View>
					<View style={style.formContent}>
						<Text style={style.title}>Programming Languages</Text>
						<MultipleSelectList
							search={false}
							setSelected={(val: SetStateAction<string[]>) =>
								setProgrammingLanguage(val)
							}
							data={dataProgrammingLanguage}
							placeholder="Select your programming languages"
							label="Programming Languages"
							searchPlaceholder="Search a programming language"
							dropdownStyles={style.input}
							boxStyles={style.input}
							inputStyles={{ color: Colors[colorScheme ?? "light"].text }}
							checkBoxStyles={{ backgroundColor: "white" }}
							dropdownTextStyles={{
								color: Colors[colorScheme ?? "light"].text,
							}}
							labelStyles={{
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
						<View style={style.tagcontainer}>
							{programmingLanguage && programmingLanguage.length > 0 ? (
								programmingLanguage.map((el) => (
									<Text style={style.tag}>{el}</Text>
								))
							) : (
								<Text>No data.</Text>
							)}
						</View>
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
							defaultOption={{ key: post, value: post }}
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
	tagcontainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap",
		gap: 5,

		paddingHorizontal: 10,
		paddingVertical: 10,
		borderWidth: 2,
		borderColor: "gray",
		borderRadius: 8,
	},
	tag: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 50,
	},
});
