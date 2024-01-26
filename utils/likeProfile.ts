import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

export const Likes = async (
	user: FirebaseAuthTypes.User | null,
	user_liked: string
) => {
	const like = {
		user: user_liked,
		date: new Date().toISOString(),
	};

	const data = {
		id: user?.uid,
		user: user_liked,
		date: new Date().toISOString(),
	};

	await db().ref(`users/${user?.uid}/likes`).push(like);
	await db().ref(`likes`).push(data);

	await db()
		.ref(`likes`)
		.orderByKey()
		.on("child_added", async (snapchot) => {
			const uid1 = snapchot.key;
			const uid2 = snapchot.val().user;

			if (uid1 === null) return;

			const hasLiked = await db()
				.ref(`likes`)
				.child(uid1)
				.child(uid2)
				.once("value");
			const hasBeenLiked = await db()
				.ref(`likes`)
				.child(uid2)
				.child(uid1)
				.once("value");

			if (hasLiked.exists() && hasBeenLiked.exists()) {
				db().ref(`users/matches`).push({
					user: uid2,
					date: new Date().toISOString(),
				});
			}

			return;
		});
};
