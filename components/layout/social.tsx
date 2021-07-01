import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

export default function SocialIcons() {
  return (
    <ButtonGroup spacing={1}>
      <IconButton
        as="a"
        href="https://github.com/machooper"
        aria-label="Github"
        icon={<FiGithub size="20px" />}
        variant="link"
      />
    </ButtonGroup>
  );
}
