import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function MessagesScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.match}>
				<Text style={styles.title}>Nouveaux Match</Text>
				<View style={styles.images}>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
					<Image
						style={styles.image}
						source={require("../../assets/images/mike.png")}
					/>
				</View>
			</View>
			<View style={styles.match}>
				<Text style={styles.title}>Messages</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
    width: "100%",

    flex: 1,
    alignItems: "center",
    gap: 50,

    paddingHorizontal: 10,
    paddingVertical: 20,
	},
	match: {
		width: "100%",
	},
	images: {
		marginTop: 20,
		paddingHorizontal: 10,
		width: "100%",

		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#BFBFBF",
  },
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
