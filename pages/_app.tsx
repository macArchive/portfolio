import { theme } from "@/styles/theme";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import "@fontsource/roboto/400.css";

export const siteTitle = "Mac Hooper";

export default function MyApp({ Component, pageProps, cookies }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
