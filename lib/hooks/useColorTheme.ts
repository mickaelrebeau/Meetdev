import { useColorScheme } from "react-native";
import { colors, type ColorTheme, type Colors } from "../../constants/Colors";

export function useColorTheme(
  defaultTheme: ColorTheme = "light"
): Colors[ColorTheme] {
  const colorScheme = useColorScheme() ?? defaultTheme;
  return colors[colorScheme];
}
