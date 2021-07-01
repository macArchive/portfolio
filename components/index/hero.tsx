import { Heading, Stack, Text } from "@chakra-ui/layout";
import Link from "next/link";

export default function Hero() {
  return (
    <Stack spacing={3}>
      <Heading maxW="70vw">
        Hi, I'm <br /> Mac Hooper
      </Heading>
      <Text>
        A Freelance Web Developer building fast, responsive and beautiful
        websites making use of cutting edge technology and perfect SEO
        techniques.
      </Text>
      <Text>
        Why not read some of my blog posts <Link href="/blog">here.</Link>
      </Text>
    </Stack>
  );
}
