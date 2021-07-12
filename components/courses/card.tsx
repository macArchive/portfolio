import { Avatar, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'

export default function Card({
  id,
  image,
  title,
  description,
  author,
  modulesCount
}) {
  return (
    <Stack
      as='a'
      href={`/courses/${id}`}
      maxW='400px'
      color='inherit'
      justify='space-between'
      w='85vw'
      border='1px'
      borderColor='gray.200'
      shadow='md'
      mx='auto'
      minH='400px'
      _hover={{
        color: 'inherit',
        border: '1px',
        borderColor: 'gray.400',
        shadow: 'lg',
        textDecoration: 'none'
      }}>
      <Stack>
        <Image src={image} w='100%' h='200px' />
        <Stack p={4}>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </Stack>
      <HStack align='center' p={4}>
        <Avatar src={author.image} borderRadius='full' size='md' />
        <Text>{modulesCount} modules - hh:mm:ss</Text>
      </HStack>
    </Stack>
  )
}
