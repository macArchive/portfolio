import { Stack } from "@chakra-ui/react";

interface ContentProps {
  children: any;
}

export default function Content({ children }: ContentProps) {
  return (
    <Stack as="main" minH="100vh" direction="column" align="center">
      <Stack
        maxW={{ sm: "85vw", md: 960, xl: "80vw" }}
        direction="column"
        align="center"
        grow={1}
        shrink={0}
        basis="auto"
      >
        {children}
      </Stack>
    </Stack>
  );
}
