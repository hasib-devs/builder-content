import { CategoryTree } from '../../../../types/catalog'
import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

type Props = {
  category: CategoryTree
}

const CategoryListItem = ({ category }: Props) => {
  return (
    <>
      {category.children && category.children.length > 0 ? (
        <li className="hover-hide-wrapper">
          <Link
            href={`/${category.slug}`}
            className={`flex cursor-pointer items-center justify-between px-4 py-1 text-sm hover:font-semibold hover:text-primary-500`}
          >
            {category.name}
            {category.children && <FiChevronRight />}
          </Link>

          <div
            className={`absolute top-0 left-full z-10 hover-hide-item h-full w-60 rounded border bg-white py-4 shadow`}
          >
            <ul className="space-y-1">
              {category.children.map((child) => (
                <CategoryListItem category={child} key={child.id} />
              ))}
            </ul>
          </div>
        </li>
      ) : (
        <li>
          <Link
            href={`/${category.slug}`}
            className={`flex cursor-pointer items-center justify-between px-4 py-1 text-sm hover:font-semibold hover:text-primary-500`}
          >
            {category.name}
          </Link>
        </li>
      )}
    </>
  )
}

export default CategoryListItem
