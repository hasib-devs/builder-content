import CategoryCard from './CategoryCard';

const CategoryGrid = ({ data }) => {
  const categories: any[] = [];

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-20 gap-y-14 md:grid-cols-4 lg:grid-cols-5">
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
