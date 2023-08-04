import IndexPageHead from 'components/blog/BlogIndexPageHead'
import Container from 'components/Container'
import Layout from 'components/Layout'
import type { Category, Settings } from 'lib/sanity.queries'
import Link from 'next/link'

export interface IndexPageProps {
  categories: Category[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { categories, settings } = props
  const { title, description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout>
        <Container>
          <header className="mx-5 mt-6 flex flex justify-between">
            <h1 className="flex-initial font-bitter text-6xl font-light leading-none tracking-tighter md:pr-8 md:text-8xl">
              {title.split('.').join('\u200b.')}
              {/* alexish&#8203;.net */}
            </h1>
            <div className="flex flex-auto grow justify-center">
              <button className="mt-5 flex h-10 w-10 items-center justify-center border-2 border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </header>
        </Container>
      </Layout>
    </>
  )
}
