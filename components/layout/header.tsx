import { Link, List, ListItem, Stack } from '@chakra-ui/react'
import Image from 'next/image'

export default function Header() {
  return (
    <Stack
      direction='row'
      align='center'
      justify='space-between'
      p='1.5rem'
      mb={{ base: '1rem', md: '2rem' }}>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt="Mac Hooper's Logo"
          width='40px'
          height='24px'
        />
      </Link>
      <List d='flex' align='center'>
        <ListItem mx='.3rem'>
          <Link href='/blog'>Blog</Link>
        </ListItem>
        <ListItem mx='.3rem'>
          <Link href='/courses'>Courses</Link>
        </ListItem>
        <ListItem mx='.3rem'>
          <Link href='/#contact'>Contact</Link>
        </ListItem>
      </List>
    </Stack>
  )
}
