import { Heading, Stack, Text } from "@chakra-ui/layout";

export default function Hero() {
  return (
    <Stack spacing={3}>
      <Heading maxW="70vw">Here Is My Blog</Heading>
      <Text>
        Come here to read some of my opinions on various topics including
        Technology, Music, Games and Fiteness. As well as plenty more. Enjoy.
      </Text>
    </Stack>
  );
}
