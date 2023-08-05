import { PortableText } from '@portabletext/react'
import IndexPageHead from 'components/blog/BlogIndexPageHead'
import Container from 'components/Container'
import Layout from 'components/Layout'
import type { Category, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import styles from './IndexPage.module.css'
import LinkBar from './LinkBar'

// import myceliumPhoto from '../public/images/mycelium.jpg'

export interface IndexPageProps {
  categories: Category[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { categories, settings } = props
  const { title, description, homeContent } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout>
        <Container>
          <header className="mt-6 flex flex-col justify-between md:flex-row">
            <h1 className="text-center font-bitter text-6xl font-light leading-none tracking-tighter md:flex-shrink-0  md:pr-8 md:text-left md:text-8xl">
              {/*
            md:basis-3/5
            md:basis-2/5
            */}
              {title.split('.').join('\u200b.')}
            </h1>
            <div className="flex-1-1 mt-6 text-center font-bitter text-2xl font-light italic md:flex-shrink ">
              <PortableText value={description} />
            </div>
          </header>
        </Container>
        <nav className="mt-6 w-full lg:flex">
          <LinkBar
            href="/projects"
            images={{
              default: '/images/mycelium-sm.jpg',
              md: '/images/mycelium-md.jpg',
              lg: '/images/mycelium-lg.jpg',
              xl: '/images/mycelium-xl.jpg',
            }}
          >
            projects
          </LinkBar>
          <LinkBar
            href="/blog"
            images={{
              default: '/images/blog-sm.jpg',
              md: '/images/blog-md.jpg',
              lg: '/images/blog-lg.jpg',
              xl: '/images/blog-xl.jpg',
            }}
          >
            blog
          </LinkBar>

          <LinkBar
            href="/contact"
            images={{
              default: '/images/contact-sm.jpg',
              md: '/images/contact-md.jpg',
              lg: '/images/contact-lg.jpg',
              xl: '/images/contact-xl.jpg',
            }}
          >
            contact
          </LinkBar>
        </nav>
        <Container>
          <div className={`mt-8 font-sans text-lg  ${styles.portableText}`}>
            <PortableText value={homeContent} />
            <p>Photos by:</p>
            <ul>
              <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Pawel Czerwinski
              </a>
            </ul>
            <ul>
              <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Aaron Burden
              </a>
            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}
