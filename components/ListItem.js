import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Category from '@/components/Category'
import siteMetdata from '@/content/siteMetadata'
const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

const ListItem = ({ post }) => {
    const { date, title, excerpt, tags } = post.frontMatter
    return (
        <li key={post.slug} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>
                            {new Date(date).toLocaleDateString(siteMetdata.locale, postDateTemplate)}
                        </time>
                    </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                    <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                                {title}
                            </Link>
                        </h3>
                        <div className="flex flex-wrap">
                            {post.relationships.category && post.relationships.category.map(cat => <Category key={cat} category={cat} />)}
                            {tags.map(tag => <Tag key={tag} text={tag} />)}
                        </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                        {excerpt}
                    </div>
                </div>
            </article>
        </li>
    );
}

export default ListItem;