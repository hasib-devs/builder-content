import { useState } from 'react';
import { Product } from '../../../../types/catalog';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const [products, _] = useState<Product[]>([]);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {products?.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductGrid;
