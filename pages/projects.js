import siteMetadata from '@/content/siteMetadata'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'
import { getAllNodes } from "next-mdx"


export async function getStaticProps() {
  const projects = await getAllNodes("project")

  return {
    props: {
      projects,
    },
  }
}

export default function Projects({ projects }) {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Popular or interesting projects I want to share
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {projects.map((d) => (
              <Card
                key={d.frontMatter.title}
                title={d.frontMatter.title}
                description={d.frontMatter.description}
                imgSrc={d.frontMatter.image}
                href={d.frontMatter.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
