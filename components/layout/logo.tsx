import Link from 'next/link'
import { HStack, Icon, Heading } from '@chakra-ui/react'
import { siteTitle } from 'pages/_app'

export default function Logo() {
  return (
    <Link href='/' passHref>
      <HStack spacing={1} cursor='pointer'>
        <Icon Name='logo' size='32px' />
        <Heading as='h1' size='md'>
          {siteTitle}
        </Heading>
      </HStack>
    </Link>
  )
}
