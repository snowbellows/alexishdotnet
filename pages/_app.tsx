import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${bitter.variable}`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
