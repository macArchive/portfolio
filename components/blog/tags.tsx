import { Tag, Wrap, WrapItem } from "@chakra-ui/react";

export default function Tags({ set }) {
  const tags = [
    "recent",
    "technology",
    "general",
    "programming",
    "web",
    "fitness",
    "all",
  ];
  return (
    <Wrap spacing={4} justify="center" pt={9} maxW="85vw">
      {tags.map((tag, index) => (
        <WrapItem>
          <Tag
            size="md"
            variant="solid"
            bg="primary.300"
            color="white"
            align="center"
            _hover={{
              bg: "primary.600",
            }}
            onClick={() => set(tags[index])}
          >
            {tag[0].toUpperCase() + tag.slice(1)}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
}
