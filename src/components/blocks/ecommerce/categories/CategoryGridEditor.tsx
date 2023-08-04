import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useBuilderConfigContext } from '@/contexts/config-context';
import { Category } from '@/types/catalog';

const CategoryGrid = ({ data }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { axios, catalogConf } = useBuilderConfigContext();
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/v1/categories`, catalogConf);
      setCategories(response.data.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-20 gap-y-14 md:grid-cols-4 lg:grid-cols-5">
      {loading && <p>Loading</p>}

      {categories
        ?.filter((c, index) => {
          if (Boolean(data.show_custom_items) && data?.custom_items?.length) {
            return data.custom_items.includes(c.id);
          }
          return index < Number(data.max_item);
        })
        .map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
    </div>
  );
};

export default CategoryGrid;
