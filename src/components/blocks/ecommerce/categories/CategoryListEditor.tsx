import React from 'react'
import CategoryListItem from './CategoryListItem'
import { CategoryTree } from '../../../../types/catalog'

const CategoryList = ({ data }) => {
  const categories: CategoryTree[] = []

  return (
    <div className=" h-full rounded border lg:block">
      <div className="relative h-full border py-4">
        <h6 className="px-4 text-base font-bold">{data.title}</h6>

        <ul className="mt-3">
          {categories
            .filter((c, index) => {
              if (
                Boolean(data.show_custom_items) &&
                data?.custom_items?.length
              ) {
                return data.custom_items.includes(c.id)
              }
              return index < Number(data.max_item)
            })
            .map((category) => {
              return <CategoryListItem category={category} key={category.id} />
            })}
        </ul>
      </div>
    </div>
  )
}

export default CategoryList
