import { useEffect, useState } from 'react';
import { Product } from '../../../../types/catalog';
import ProductCard from './ProductCard';
import { useBuilderConfigContext } from '@/contexts/config-context';

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { axios, catalogConf } = useBuilderConfigContext();
  const fetchData = async () => {
    try {
      const res = await axios.get('/api/v1/products?limit=8', catalogConf);

      setProducts(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {products?.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductGrid;
