import { useEffect, useState } from 'react';
import CategoryListItem from './CategoryListItem';
import { CategoryTree } from '@/types/catalog';
import { useBuilderConfigContext } from '@/contexts/config-context';
import arrayToTree from 'array-to-tree';
const CategoryList = ({ data }) => {
  const [categories, setCategories] = useState<CategoryTree[]>([]);
  const { axios, catalogConf } = useBuilderConfigContext();
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/v1/categories`, catalogConf);
      setCategories(
        arrayToTree(response.data.data, {
          parentProperty: 'parent',
          customID: '_id',
        })
      );
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="h-full rounded border  sm:block">
      <div className="relative h-full border py-4">
        <h6 className="px-4 text-base font-bold">{data.title}</h6>

        {loading && <p>Loading...</p>}

        <ul className="mt-3">
          {categories
            .filter((c, index) => {
              if (
                Boolean(data.show_custom_items) &&
                data?.custom_items?.length
              ) {
                return data.custom_items.includes(c.id);
              }
              return index < Number(data.max_item);
            })
            .map((category) => {
              return <CategoryListItem category={category} key={category.id} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
