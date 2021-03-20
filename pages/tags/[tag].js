import { kebabCase } from '@/lib/utils'
import siteMetadata from '@/content/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { getAllNodes } from "next-mdx"


export async function getStaticPaths() {
  const posts = await getAllNodes("post")

  let tags = {}
  posts.forEach((post) => {
    if (post.frontMatter.tags) {
      post.frontMatter.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        if (formattedTag in tags) {
          tags[formattedTag] += 1
        } else {
          tags[formattedTag] = 1
        }
      })
    }
  })

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await getAllNodes("post")
  const filteredPosts = posts.filter(
    (post) => post.frontMatter.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  //const rss = generateRss(filteredPosts, `tags/${params.tag}/index.xml`)
  //const rssPath = path.join(root, 'public', 'tags', params.tag)
  //fs.mkdirSync(rssPath, { recursive: true })
  //fs.writeFileSync(path.join(rssPath, 'index.xml'), rss)

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = '#' + tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  return (
    <>
      <PageSeo
        title={`${tag} - ${siteMetadata.title}`}
        description={`${tag} tags - ${siteMetadata.title}`}
        url={`${siteMetadata.siteUrl}/tags/${tag}`}
      />
      <ListLayout posts={posts} title={title} />
    </>
  )
}
