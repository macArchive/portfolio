import { Image, Link, List, ListItem, Stack } from '@chakra-ui/react'

export default function Header() {
  return (
    <Stack
      direction='row'
      align='center'
      justify='space-between'
      p='1.5rem'
      mb={{ base: '1rem', md: '2rem' }}>
      <Link href='/' passHref>
        <Image src='/logo.png' alt="Mac Hooper's Logo" w={10} />
      </Link>
      <List d='flex' align='center'>
        <Link href='/blog' passHref>
          <ListItem mx='.3rem'>Blog</ListItem>
        </Link>
        {/* <Link href="/courses" passHref>
          <ListItem mx=".3rem">Courses</ListItem>
        </Link> */}
        <Link href='/#contact' passHref>
          <ListItem mx='.3rem'>Contact</ListItem>
        </Link>
      </List>
    </Stack>
  )
}
