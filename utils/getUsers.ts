import db from "@react-native-firebase/database";

export const getUsers = (users: any[]) => {
	db()
		.ref(`users`)
		.on("value", (snapchot) => {
			const datas = snapchot.val();

			for (const data of datas) {
				if (
					data.bio &&
					data.image_uri &&
					data.name &&
					data.country &&
					data.filters &&
					data.post &&
					data.company &&
					data.programming_languages
				) {
					users.push({
						id: data.uid,
						image_uri: data.image_uri,
						bio: data.bio,
						username: data.name,
						company: data.company,
						post: data.post,
						github_url: data.github_url,
						portfolio_url: data.portfolio_url,
						tags: data.filters,
					});
				}
			}
		});
};
