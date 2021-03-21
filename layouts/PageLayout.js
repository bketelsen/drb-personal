import siteMetadata from '@/content/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function PageLayout({ post, children, frontMatter }) {
  const { title } = frontMatter
  const slug = post.slug

  return (
    <>
      <PageSeo
        title={`${title} - ${siteMetadata.author.name}`}
        description={`${title} - ${siteMetadata.author.name}`}
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author.name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.author.title}</div>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.author.company}</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.author.email}`} />
              <SocialIcon kind="github" href={siteMetadata.author.github} />
              <SocialIcon kind="facebook" href={siteMetadata.author.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.author.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.author.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.author.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
