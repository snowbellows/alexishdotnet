import Link from 'next/link'

import styles from './LinkBar.module.css'

export interface LinkBarProps {
  href: string
  images: {
    default: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
  children: React.ReactNode
}

export default function LinkBar(props: LinkBarProps) {
  const { children, href, images } = props

  const imgSm = images.sm || images.default
  const imgMd = images.md || images.sm || images.default
  const imgLg = images.lg || images.md || images.sm || images.default
  const imgXl =
    images.xl || images.lg || images.md || images.sm || images.default

  return (
    <Link href={href} className="lg:basis-1/3">
      <div
        className={`flex h-32 items-center justify-center border-stone-800 bg-stone-800 bg-cover bg-center shadow-[inset_0_0_15px_5px_#0c0a09] md:42 lg:grayscale-0 lg:transition lg:ease-in-out lg:duration-300 lg:hover:grayscale lg:hover:underline decoration-stone-100 lg:decoration-4 lg:underline-offset-4 xl:h-56  ${styles.linkBarBackground}`}
        style={
          {
            '--image-default': `url(${images.default})`,
            '--image-sm': `url(${imgSm})`,
            '--image-md': `url(${imgMd})`,
            '--image-lg': `url(${imgLg})`,
            '--image-xl': `url(${imgXl})`,
          } as React.CSSProperties
        }
      >
        <div className="pb-3 font-bitter text-5xl text-stone-100  drop-shadow-[0_0_3px_#0c0a09] xl:text-6xl">
          {children}
        </div>
      </div>
    </Link>
  )
}
