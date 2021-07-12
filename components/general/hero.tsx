import { Heading, Stack, Text } from '@chakra-ui/layout'

export default function Hero({ title, text }) {
  return (
    <Stack spacing={3}>
      <Heading maxW='70vw'>{title}</Heading>
      <Text>{text}</Text>
    </Stack>
  )
}
