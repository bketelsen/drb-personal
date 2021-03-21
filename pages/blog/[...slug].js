import fs from 'fs'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'
import { useHydrate } from "next-mdx/client"
import generateRss from '@/lib/generate-rss.js'
import { getMdxNode, getAllMdxNodes, getMdxPaths } from "next-mdx/server"


export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  }
}


export async function getStaticProps(context) {
  const post = await getMdxNode("post", context)
  if (!post) {
    return {
      notFound: true,
    }
  }
  const allPosts = await getAllMdxNodes("post")
  const postIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null


  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/index.xml', rss)

  return { props: { post, prev, next } }
}

export default function Blog({ post, prev, next }) {
  const { frontMatter } = post
  const content = useHydrate(post, {
    components: MDXComponents,
  })

  return (
    <>
      <PostLayout post={post} frontMatter={frontMatter} prev={prev} next={next}>
        {content}
      </PostLayout>
    </>
  )
}
