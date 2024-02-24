import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchGetUserById = async () => {
	try {
		const userId = await AsyncStorage.getItem("userId");

		const url = `http://192.168.1.36:3030/user/${userId}/displayname`;

		const response = await fetch(url);

		if (!response.ok) {
			console.log(`Server error: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log("error", error);
	}
};

export const fetchGetUserDataById = async () => {
	try {
		const userId = await AsyncStorage.getItem("userId");

		const response = await fetch("http://192.168.1.36:3030/data/" + userId);

		if (!response.ok) {
			console.log(`Server error: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchPostUserData = async (data: Data) => {
	try {
		const userId = await AsyncStorage.getItem("userId");

		const response = await fetch(
			"http://192.168.1.36:3030/data/" + userId,
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				}
			}
		)

		if (!response.ok) {
			console.log(`Server error: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
}

export const fetchPostImage = async (
	image: null | { uri: string; name: string; type: string }
) => {
	try {
		const userId = await AsyncStorage.getItem("userId");

		const response = await fetch(
			"http://192.168.1.36:3030/image/upload/" + userId,
			{
				method: "POST",
				body: JSON.stringify(image),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!response.ok) {
			console.log(`Server error: ${response.status}`);
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchGetImageByUserId = async () => {
	try {
		const userId = await AsyncStorage.getItem("userId");

		const response = await fetch("http://192.168.1.36:3030/image/" + userId);

		if (!response.ok) {
			console.log(`Server error: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
