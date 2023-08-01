import CategoryListItem from './CategoryListItem'

import arrayToTree from 'array-to-tree'
import { CategoryTree } from '../../../../types/catalog'
import { headers } from 'next/headers'
import { isEmpty } from 'lodash'
import React from 'react'
import { useBuilderConfigContext } from '../../../../contexts/config-context'

async function getCategoryTrees({ catalogConf }) {
  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('protocol') ?? 'https:'
  const baseURL = !isEmpty(catalogConf.baseURL)
    ? catalogConf.baseURL
    : `${protocol}//${host}`
  const response = await fetch(`${baseURL}/api/v1/categories`, {
    // next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }

  const result = await response.json()

  return arrayToTree(result.data, {
    parentProperty: 'parent',
    customID: '_id',
  }) as CategoryTree[]
}

export default async function CategoryList() {
  const { catalogConf } = useBuilderConfigContext()
  const tree = await getCategoryTrees({ catalogConf })

  return (
    <div className="relative h-full py-4">
      <h6 className="px-4 text-base font-bold">Categories</h6>

      <ul className="mt-3">
        {tree
          ?.filter((_, index) => index < 12)
          .map((category) => {
            return <CategoryListItem category={category} key={category.id} />
          })}
      </ul>
      {/* <Link href="/categories">
        <a className="mt-3 flex items-center justify-between px-4 text-sm hover:font-medium hover:text-primary-500">
          All Categories
          <FiChevronRight />
        </a>
      </Link> */}
    </div>
  )
}
