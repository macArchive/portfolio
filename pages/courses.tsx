import Hero from '@/comps/general/hero'
import Layout from '@/layout/index'
import List from '@/comps/courses/list'
export default function Courses({ courses }) {
  return (
    <Layout
      title='Courses'
      description='A list of courses created by Mac Hooper.'>
      <Hero
        title='Learn Something New'
        text='Here you can learn some new technologies, or how to build something specific using modern tools and methods.'
      />
      <List />
    </Layout>
  )
}
