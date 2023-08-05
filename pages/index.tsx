import IndexPage from 'components/IndexPage'
import { getAllCategories, getSettings } from 'lib/sanity.client'
import { Category, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'

interface PageProps {
  settings: Settings
  categories: Category[]
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { settings, categories } = props

  return <IndexPage categories={categories} settings={settings} />
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const [settings, categories = []] = await Promise.all([
    getSettings(),
    getAllCategories(),
  ])

  return {
    props: {
      settings,
      categories,
    },
  }
}
