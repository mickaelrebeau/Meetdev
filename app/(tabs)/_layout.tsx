import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

import { LogoSvg } from "../../assets/images/LogoSvg";
import { Octicons } from "@expo/vector-icons";
import { useColorTheme } from "../../lib/hooks/useColorTheme";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: React.ComponentProps<typeof FontAwesome>["color"];
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colors = useColorTheme();

	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: colors.tint }}>
			<Tabs.Screen
				name="messages"
				options={{
					title: "Messages",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="comments" color={color} />
					),
					headerLeft: () => <LogoSvg style={{ marginLeft: 15 }} />,
				}}
			/>
			<Tabs.Screen
				name="home"
				options={{
					title: "Meetdev",
					tabBarIcon: ({ color }) => (
						<Octicons name="flame" size={24} color={color} />
					),
					headerLeft: () => <LogoSvg style={{ marginLeft: 15 }} />,
					headerRight: () => (
						<View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
							<Link href="/notifications" asChild>
								<Pressable>
									{({ pressed }) => (
										<FontAwesome
											name="bell"
											size={25}
											color={colors.tint}
											style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
										/>
									)}
								</Pressable>
							</Link>
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="profil"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
					headerLeft: () => <LogoSvg style={{ marginLeft: 15 }} />,
					headerRight: () => (
						<View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
							<Link href="/settings" asChild>
								<Pressable>
									{({ pressed }) => (
										<FontAwesome
											name="gear"
											size={30}
											color={colors.tint}
											style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
										/>
									)}
								</Pressable>
							</Link>
						</View>
					),
				}}
			/>
		</Tabs>
	);
}
