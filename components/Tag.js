import Link from 'next/link'
import { kebabCase } from '@/lib/utils'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium py-1 px-1 text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
