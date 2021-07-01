import { Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <Stack align="center">
      <Stack direction="row" align="center" spacing={4}>
        <Link
          href="https://www.youtube.com/channel/UCnTtBprmR4yTz3ieMSuWzlA"
          passHref
        >
          <AiFillYoutube fontSize="2.5rem" />
        </Link>
        <Link href="https://www.github.com/machooper" passHref>
          <AiFillGithub fontSize="2.5rem" />
        </Link>
      </Stack>
      <Text fontSize="sm" py={2} w="100vw" align="center">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="https://machooper.tech">Mac</Link>, All Rights Reserved
      </Text>
    </Stack>
  );
}
