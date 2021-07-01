import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Button, Heading, Text } from "./components";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  fonts: {
    heading: "system-ui",
    body: "system-ui",
  },
  colors: {
    black: "#1c1c1c",
    white: "#fefefe",
    primary: {
      50: "#80ccff",
      100: "#66c2ff",
      200: "#4db8ff",
      300: "#33adff",
      400: "#1aa3ff",
      500: "#0099ff",
      600: "#008ae6",
      700: "#007acc",
      800: "#006bb3",
      900: "#005c99",
    },
    secondary: {
      50: "#ffca80",
      100: "#ffbf66",
      200: "#ffb54d",
      300: "#ffaa33",
      400: "#ffa01a",
      500: "#ff9500",
      600: "#e68600",
      700: "#cc7700",
      800: "#b36800",
      900: "#995900",
    },
  },
  styles: {
    global: {
      body: {
        maxW: { base: "100vw", md: "960px" },
        display: "flex",
        flexDirection: "column",
        align: "center",
        overflowX: "hidden",
        fontFamily: "body",
        color: mode("black", "white"),
        bg: mode("white", "black"),
        mx: "auto",
      },
      a: {
        color: "primary.500",
        _hover: {
          color: "primary.700",
          textDecoration: "underline",
          cursor: "pointer",
        },
      },
    },
  },
  textStyles: {
    h2: {
      fontSize: "36px",
      fontWeight: "semibold",
    },
  },
  components: {
    Button,
    Text,
    Heading,
  },
  config,
});
