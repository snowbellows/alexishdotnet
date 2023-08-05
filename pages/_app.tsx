import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
import { Work_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const bitter = localFont({
  variable: '--font-bitter',
  src: [
    {
      path: './fonts/BitterPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/BitterPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/BitterPro-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BitterPro-MediumItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/BitterPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/BitterPro-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: 'variable',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${bitter.variable} ${workSans.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
