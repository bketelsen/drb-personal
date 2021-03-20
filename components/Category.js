import Link from 'next/link'
import { categoryColor } from '@/lib/utils'



const Category = ({ category }) => {
  const colorSet = categoryColor.get(category.frontMatter.color)
  return (
    <Link href={`/blog/categories/${category.slug}`}>
      <a className="inline-block  ">
        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${colorSet.bg} ${colorSet.fg}`}>
          {category.frontMatter.name}
        </span>
      </a>
    </Link>
  )
}

export default Category
