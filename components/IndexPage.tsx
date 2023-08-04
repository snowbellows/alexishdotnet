import IndexPageHead from 'components/blog/BlogIndexPageHead'
import Container from 'components/Container'
import Layout from 'components/Layout'
import type { Category, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

// import myceliumPhoto from '../public/images/mycelium.jpg'

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
        <header className="mx-8 mt-6 flex justify-between">
          <h1 className="flex-initial font-bitter text-6xl font-light leading-none tracking-tighter md:pr-8 md:text-8xl">
            {title.split('.').join('\u200b.')}
          </h1>
          <div className="flex flex-auto flex-grow justify-center ml-5">
            <button className="mt-5 flex h-10 w-10 items-center justify-center border-2 border-stone-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#0c0a09"
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
        <Link href="/projects">
          <div
            className={`mt-20 flex h-60 items-center justify-center bg-stone-800 bg-cover bg-center border-stone-800 shadow-[inset_0_0_20px_10px_#0c0a09]
            bg-[url('/images/mycelium-sm.jpg')]
            md:bg-[url('/images/mycelium-md.jpg')] 
            lg:bg-[url('/images/mycelium-lg.jpg')] 
            xl:bg-[url('/images/mycelium-xl.jpg')]`}
            // style={{ background: `url(${myceliumPhoto.src}) center / cover` }}
          >
            {/* <Image
                src={myceliumPhoto}
                height={300}
                alt=""
                className='background'
              ></Image> */}
            <div className="pb-3 font-bitter text-5xl  text-slate-100 drop-shadow-[0_0_10px_#0c0a09]">
              projects
            </div>
          </div>
        </Link>
        <Container>blog</Container>
      </Layout>
    </>
  )
}
