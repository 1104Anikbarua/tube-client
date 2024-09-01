import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

// color array
const baseColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "gray",
  "indigo",
  "purple",
  "pink",
];

//shade mapping object
const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};
type TColors = {
  colors: any;
  shadeMapping: Record<string, string>;
  invert?: boolean;
};
//
const generateThemeObject = ({
  colors,
  shadeMapping,
  invert = false,
}: TColors) => {
  const theme: Record<string, any> = {};
  baseColors?.forEach((color) => {
    theme[color] = {};
    Object.entries(shadeMapping).forEach(([key, value]) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};
const lightTheme = generateThemeObject({ colors, shadeMapping });
const invert = true;
const darkTheme = generateThemeObject({
  colors,
  shadeMapping,
  invert,
});
const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray[950],
    black: colors.gray[50],
  },
};
//
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [createThemes(themes)],
};
export default config;
