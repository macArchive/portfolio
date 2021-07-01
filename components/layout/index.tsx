import Content from './content'
import Footer from './footer'
import Head from './head'
import Header from './header'

interface LayoutProps {
  title: string
  description: string
  children: any
}

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head
        pageTitle={title}
        pageDescription={description}
        socialImage='ph'
        socialImageText={title}
        siteIcon='/logo.png'
        touchIcon='/logo.png'
        siteLocale='en_GB'
        siteType='website'
        siteUrl='https://machooper.tech'
        themeColor='#0099ff'
      />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
