export const Button = {
  baseStyle: {
    borderRadius: 'base',
    fontWeight: '400'
  },
  variants: {
    solid: {
      color: 'white',
      bg: 'primary.500',
      _hover: {
        bg: 'primary.700'
      }
    }
  }
}

export const Text = {
  baseStyle: {
    w: { base: '85vw', md: '720px' },
    textAlign: 'left'
  }
}

export const Heading = {
  baseStyle: {
    alignSelf: 'start'
  }
}
