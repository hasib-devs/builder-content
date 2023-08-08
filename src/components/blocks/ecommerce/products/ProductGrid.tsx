import { useEffect, useState } from 'react';
import { Product } from '../../../../types/catalog';
import ProductCard from './ProductCard';
import { useBuilderConfigContext } from '@/contexts/config-context';

const ProductGrid = ({ data }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { axios, catalogConf } = useBuilderConfigContext();
  const fetchData = async () => {
    try {
      if (Boolean(data.show_custom_items)) {
        const res = await axios.post(
          `/api/v1/products/batch`,
          {
            productIds: data.custom_items,
          },
          catalogConf
        );
        setProducts(res.data.data);
      } else {
        const limit = Number(data.max_item);
        const res = await axios.get(
          `/api/v1/products?limit=${limit}`,
          catalogConf
        );

        setProducts(res.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [data.max_item, data.custom_items, data.show_custom_items]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {products.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductGrid;
