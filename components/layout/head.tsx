import NextHead from 'next/head'
import { siteTitle } from '../../pages/_app'

interface HeadProps {
  pageTitle: string
  pageDescription: string
  socialImage: string
  socialImageText: string
  siteIcon: string
  touchIcon: string
  siteLocale: string
  siteType: 'website' | 'app'
  siteUrl: string
  themeColor: string
}

export default function Head({
  pageTitle,
  pageDescription,
  socialImage,
  socialImageText,
  siteIcon,
  touchIcon,
  siteLocale,
  siteType,
  siteUrl,
  themeColor
}: HeadProps) {
  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={pageDescription} />
      <meta property='og:title' content={`${pageTitle} | ${siteTitle}`} />
      <meta property='og:description' content={pageDescription} />
      <meta property='og:image' content={socialImage} />
      <meta property='og:image:alt' content={socialImageText} />
      <meta property='og:locale' content={siteLocale} />
      <meta property='og:type' content={siteType} />
      <meta property='og:url' content={siteUrl} />
      <meta name='twitter:card' content={socialImage} />
      <meta name='theme-color' content={themeColor} />
      <link rel='canonical' href={siteUrl} />
      <link rel='icon' href={siteIcon} type='image/svg+xml' />
      <link rel='apple-touch-icon' href={touchIcon} />
      <link
        rel='manifest'
        crossOrigin='use-credentials'
        href='/manifest.json'
      />
      <title>
        {pageTitle} | {siteTitle}
      </title>
    </NextHead>
  )
}
