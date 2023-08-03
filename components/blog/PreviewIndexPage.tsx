import IndexPage from 'components/blog/BlogIndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  postIndexQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, postIndexQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview posts={posts} settings={settings} />
}
