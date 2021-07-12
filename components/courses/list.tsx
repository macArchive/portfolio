import { Wrap } from '@chakra-ui/react'
import Card from './card'

export default function List({ courses }) {
  return (
    <Wrap>
      <Card
        id='1'
        image='https://via.placeholder.com/350x150'
        title='Course One'
        description='Course description goes here.'
        author={{
          name: 'Mac',
          image:
            'https://pbs.twimg.com/profile_images/1340764046816145408/q8RdrMQt_400x400.jpg'
        }}
        modulesCount='5'
      />
    </Wrap>
  )
}
