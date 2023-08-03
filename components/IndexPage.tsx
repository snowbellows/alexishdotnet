import IndexPageHead from 'components/blog/BlogIndexPageHead'
import Container from 'components/Container'
import Layout from 'components/Layout'
import type { Category, Settings } from 'lib/sanity.queries'

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

      <Layout >
        <Container>
        </Container>
      </Layout>
    </>
  )
}
