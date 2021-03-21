import { getAllNodes } from "next-mdx"
import siteMetadata from '@/content/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllNodes("post")

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author.name}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout posts={posts} title="All Posts" />
    </>
  )
}
