import { Button, Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Cta({ heading, text, button, leftIcon, url }) {
  return (
    <Stack py={12} position='relative'>
      <Stack
        maxW='85vw'
        height='400px'
        textAlign='center'
        align='center'
        justify='center'
        _after={{
          content: '""',
          width: '100vw',
          height: '90%',
          position: 'absolute',
          background: 'secondary.200',
          zIndex: -1,
          top: 0,
          transformOrigin: 'left top',
          transform: 'skewY(3deg)',
          overflowX: 'hidden',
          boxShadow: 'lg'
        }}
        _before={{
          content: '""',
          width: '100vw',
          height: '90%',
          position: 'absolute',
          background: 'secondary.200',
          zIndex: -1,
          top: 0,
          transformOrigin: 'left bottom',
          transform: 'skewY(3deg)',
          overflowX: 'hidden'
        }}
        spacing={7}>
        <Heading maxW='400px' mx='auto'>
          {heading}
        </Heading>
        <Text textAlign='center' maxW='400px'>
          {text}
        </Text>
        <Link href={url}>
          <Button variant='solid' leftIcon={leftIcon}>
            {button}
          </Button>
        </Link>
      </Stack>
    </Stack>
  )
}
