import { AntDesign } from "@expo/vector-icons";
import { View, Text } from "../Themed";
import { Modal, Pressable, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export const PrivacyPolicy = ({
	modalVisible,
	setModalVisible,
}: {
	modalVisible: boolean;
	setModalVisible: (value: boolean) => void;
}) => {
	const colorScheme = useColorScheme();

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				setModalVisible(!modalVisible);
			}}
		>
			<View style={styles.container}>
				<View style={styles.card}>
					<View style={styles.header}>
						<Text style={styles.title}>Privacy Policy</Text>
						<Pressable
							onPress={() => setModalVisible(!modalVisible)}
							style={({ pressed }) => [
								styles.close,
								{ opacity: pressed ? 0.5 : 1 },
							]}
						>
							<AntDesign
								name="closecircle"
								size={24}
								color={Colors[colorScheme ?? "light"].tint}
							/>
						</Pressable>
					</View>
					<ScrollView>
						<View style={styles.body}>
							<Text style={styles.text}>
								The app Meetdev is owned by Mike_dreeman, which is a data
								controller of your personal data. We have adopted this Privacy
								Policy, which determines how we handle information collected by
								Meetdev, which also provides the reasons why we need to collect
								certain personal data about you. Therefore, you should read this
								Privacy Policy before using Meetdev.We take care of your
								personal data and are committed to ensuring its confidentiality
								and security.
							</Text>
							<Text style={styles.title2}>
								The personal information we collect:
							</Text>
							<Text style={styles.text}>
								When you visit Meetdev, we automatically collect certain
								information on your device, including information on your web
								browser, your IP address, your time zone and some of the cookies
								installed on your device. In addition, when you browse the Site,
								we collect information about the individual web pages or
								products you visit, the websites or search terms that have
								referred you to the Site, and how you interact with the Site. We
								refer to this automatically collected information as "device
								information". In addition, we may collect the personal data you
								provide to us (including, but not limited to, name, address,
								payment information, etc.) when registering in order to be able
								to perform the contract.
							</Text>
							<Text style={styles.title2}>Why do we process your data?</Text>
							<Text style={styles.text}>
								Our top priority is the security of customer data and, as such,
								we can only process minimal user data, only to the extent that
								this is absolutely necessary to maintain the website. The
								information collected automatically is used only to identify
								potential cases of abuse and to establish statistical
								information about the use of the website. This statistical
								information is not otherwise aggregated to identify a particular
								user of the system.
							</Text>
							<Text style={styles.text}>
								You can visit the website without telling us who you are or
								revealing any information, by which someone could identify you
								as a specific and identifiable individual. However, if you wish
								to use certain features of the website, or if you wish to
								receive our newsletter or provide other details by filling out a
								form, you may provide us with personal data, such as your
								e-mail, your first name, last name, city of residence,
								organization, phone number. You may choose not to provide us
								with your personal data, but you may not be able to take
								advantage of certain features of the website. For example, you
								will not be able to receive our newsletter or contact us
								directly from the website. Users who do not know what
								information is required are invited to contact us via
								meetdev-feedback@contact.fr
							</Text>
							<Text style={styles.title2}>
								If you are a European resident, you have the following rights
								related to your personal data:
							</Text>
							<Text style={styles.text}>
								The right to be informed. The right of access. The right of
								rectification. The right to erasure. The right to restrict
								processing. The right to data portability. The right of
								opposition. Automated decision-making and profiling rights. If
								you wish to exercise this right, please contact us via the
								contact details below
							</Text>
							<Text style={styles.text}>
								In addition, if you are a European resident, we note that we
								process your information in order to fulfill any contracts we
								may have with you (for example, if you place an order through
								the site), or otherwise to pursue our legitimate business
								interests listed above. In addition, please note that your
								information may be transferred outside of Europe, including
								Canada and the United States.
							</Text>
							<Text style={styles.title2}>Links to other websites:</Text>
							<Text style={styles.text}>
								Our website may contain links to other websites that are not
								owned or controlled by us. Please be aware that we are not
								responsible for these other websites or the privacy practices of
								third parties. We encourage you to pay attention when you leave
								our website and to read the privacy statements of each website
								that may collect personal information.
							</Text>
							<Text style={styles.title2}>Information Security:</Text>
							<Text style={styles.text}>
								We secure the information you provide on computer servers in a
								controlled and secure environment, protected from unauthorized
								access, use or disclosure. We retain reasonable administrative,
								technical and physical safeguards to protect ourselves from
								unauthorized access, use, modification and disclosure of
								personal data under its control and custody. However, no data
								transmission over the Internet or over a wireless network can be
								guaranteed.
							</Text>
							<Text style={styles.title2}>Legal Disclosure:</Text>
							<Text style={styles.text}>
								We will disclose any information we collect, use or receive if
								required or permitted by law, for example to comply with a
								subpoena or similar legal process, and when we believe in good
								faith that disclosure is necessary to protect our rights, your
								safety or that of others, to investigate fraud, or to respond to
								a government request.
							</Text>
							<Text style={styles.title2}>Contact information:</Text>
							<Text style={styles.text}>
								If you would like to contact us to further understand this
								policy or if you would like to contact us regarding any
								questions relating to individual rights and your personal
								information, you can send an email to
								meetdev-feedback@contact.fr.
							</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		padding: 20,
		width: "90%",
		height: "90%",

		borderRadius: 10,
	},
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	text: {
		fontSize: 16,
		fontWeight: "400",
		textAlign: "left",
	},
	title2: {
		fontSize: 18,
		fontWeight: "500",
	},
	close: {
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	body: {
		paddingVertical: 30,

		alignItems: "center",
		gap: 20,
	},
});
