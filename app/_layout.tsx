import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import * as Updates from "expo-updates";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import auth from "@react-native-firebase/auth";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	const checkUpdate = async () => {
		try {
			const update = await Updates.checkForUpdateAsync();

			if (update.isAvailable) {
				await Updates.fetchUpdateAsync();
				await Updates.reloadAsync();
			}
		} catch (error) {
			alert(`Error checking for updates: ${error}`);
		}
	};
	
	const onAuthStateChange = (user: FirebaseAuthTypes.User | null) => {
		if (user) {
			router.push("/home");
		} else {
			router.push("/");
		}
	};

	useEffect(() => {
		checkUpdate();
		auth().onAuthStateChanged(onAuthStateChange);
	}, []);

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="signup-step" options={{ headerShown: false }} />
				<Stack.Screen
					name="forgot-password"
					options={{ presentation: "modal", title: "Reset Password" }}
				/>
				<Stack.Screen
					name="auth"
					options={{ headerShown: false, presentation: "modal" }}
				/>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen
					name="chat/[id]"
					options={{ presentation: "modal", headerShown: false }}
				/>
				<Stack.Screen
					name="notifications"
					options={{ presentation: "modal", title: "Notifications" }}
				/>
				<Stack.Screen
					name="settings"
					options={{ presentation: "modal", title: "Settings" }}
				/>
				<Stack.Screen
					name="edit-profile"
					options={{ presentation: "modal", title: "Edit Profile" }}
				/>
				<Stack.Screen name="card" options={{ headerShown: false }} />
			</Stack>
		</ThemeProvider>
	);
}
