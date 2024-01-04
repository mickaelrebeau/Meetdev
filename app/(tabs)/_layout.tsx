import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}
		>
			<Tabs.Screen
				name="messages"
				options={{
					title: "Messages",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="comment" color={color} />
					),
					headerRight: () => (
						<Link href="/security" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="shield"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "Meetdev",
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
					headerRight: () => (
						<Link href="/notifications" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="bell"
										size={25}
										color={Colors[colorScheme ?? "light"].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="profil"
				options={{
					title: "Profil",
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
					headerRight: () => (
						<View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
							<Link href="/security" asChild>
								<Pressable>
									{({ pressed }) => (
										<FontAwesome
											name="shield"
											size={25}
											color={Colors[colorScheme ?? "light"].text}
											style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
										/>
									)}
								</Pressable>
							</Link>
							<Link href="/settings" asChild>
								<Pressable>
									{({ pressed }) => (
										<FontAwesome
											name="gear"
											size={25}
											color={Colors[colorScheme ?? "light"].text}
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
