import Link from '@/components/Link'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { getAllNodes } from 'next-mdx'
import siteMetadata from '@/content/siteMetadata'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllNodes('post')
  return {
    props: {
      posts: posts.filter((post) => post.frontMatter.featured),
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />

      {!posts.length && 'No posts found.'}
      {posts.length && (
        <ListLayout posts={posts.slice(0, MAX_DISPLAY)} showSearch={false} title="Featured Posts" />
      )}

      <div className="flex justify-beginning text-base font-medium leading-6">
        <Link
          href="/blog"
          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label="all posts"
        >
          All Posts &rarr;
        </Link>
      </div>
    </>
  )
}
