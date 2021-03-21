import { getAllNodes, getMdxPaths, getNode } from "next-mdx"
import siteMetadata from '@/content/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'

export default function CategoryPage({ category, posts }) {
    return (
        <>
            <PageSeo
                title={`Blog - ${siteMetadata.author.name}`}
                description={siteMetadata.description}
                url={`${siteMetadata.siteUrl}/blog`}
            />
            <ListLayout posts={posts} title={category.frontMatter.name} />
        </>
    )
}


export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("category"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const category = await getNode("category", context)

    if (!category) {
        return {
            notFound: true,
        }
    }

    const posts = await getAllNodes("post")

    return {
        props: {
            category,
            posts: posts.filter((post) =>
                post.relationships.category.some(({ slug }) => slug === category.slug)
            ),
        },
    }
}
