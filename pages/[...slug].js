import PageLayout from '@/layouts/PageLayout'
import MDXComponents from '@/components/MDXComponents'
import { useHydrate } from "next-mdx/client"
import { getMdxNode, getMdxPaths } from "next-mdx/server"



export async function getStaticPaths() {
    return {
        paths: await getMdxPaths("page"),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const page = await getMdxNode("page", context, {
        components: MDXComponents,
    })

    return {
        props: {
            page,
        },
    }
}

export default function Page({ page }) {
    const { frontMatter } = page
    const content = useHydrate(page, {
        components: MDXComponents,
    })

    return (
        <>
            <PageLayout post={page} frontMatter={frontMatter}>
                {content}
            </PageLayout>
        </>
    )
}
