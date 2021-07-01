import { Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function List({ tag, allPosts }) {
  let posts
  if (tag === 'recent') {
    posts = allPosts.slice(0, 3)
  } else if (tag === 'all') {
    posts = allPosts
  } else if (tag === 'more') {
    posts = allPosts
  } else {
    posts = allPosts.filter((post) => post.topic.includes(tag))
  }
  return (
    <Stack align="center" pt={4} spacing={4} minHeight="450px">
      <Heading size="lg">{tag[0].toUpperCase() + tag.slice(1)} Posts</Heading>
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Stack
            direction="row"
            justify="space-around"
            align="center"
            w="85vw"
            maxW="400px"
            border="1px"
            borderColor="gray.200"
            shadow="md"
            p=".5rem"
          >
            <Stack w="80%">
              <Heading fontSize="20px">{post.title}</Heading>
              <Text maxW="100%" noOfLines={2}>
                {post.excerpt}
              </Text>
            </Stack>
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}
