const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export type Colors = typeof colors;
export type ColorTheme = keyof Colors;

export const colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    chatBackground: "#fff",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    chatBackground: "#3e3e3e",
  },
};

export default colors;
