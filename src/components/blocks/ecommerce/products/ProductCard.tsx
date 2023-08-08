import Button from '../../../shared/Button';
import LinkButton from '../../../shared/LinkButton';
import Rating from '../../../shared/Rating';

import { Product } from '../../../../types/catalog';
import { formatCurrency, generateImageUrl } from '../../../../utils';
import { FC, MouseEvent } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import PlaceHolderImage from '../../../shared/Placeholder';

interface ProductCardProps {
  layout?: 'vertical' | 'horizontal';
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({
  layout = 'vertical',
  product,
}: ProductCardProps) => {
  const handleOnClick = (e: MouseEvent) => {
    e.stopPropagation();
    // router.push(`/products/${product.id}`);
  };

  if (layout === 'horizontal') {
    return (
      <div
        className="relative grid cursor-pointer grid-cols-2 gap-4 overflow-hidden rounded border p-4 transition-all duration-300 hover:bg-gray-50 hover:shadow sm:grid-cols-3 md:grid-cols-4"
        onClick={handleOnClick}
      >
        <div>
          <div className="relative h-[150px] w-full object-cover">
            <img
              className={'rounded'}
              src={
                product.media[0]?.path
                  ? generateImageUrl(product.media[0].path)
                  : '/images/placeholder.png'
              }
              // fill={true}
              alt="product-image"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-3">
          <h6 className="text-lg font-semibold">{product.title}</h6>
          <div className="flex items-center gap-1">
            <Rating count={5} value={product.averageRating} size={16} />
            <span className="text-sm font-medium text-gray-400">
              ({product.averageRating})
            </span>
          </div>
          <div className="mt-4">
            <span className="text-2xl font-bold">
              {/* {currency.symbol} */}
              {product.salePrice ? product.salePrice.toFixed(2) : product.price}
            </span>
            <span className="ml-2 text-sm text-gray-400 line-through">
              {/* {currency.symbol} */}
              {product.salePrice ? product.price.toFixed(2) : product.price}
            </span>
          </div>
          <div className="mt-4">
            {product.hasVariation ? (
              <LinkButton
                className="items-center gap-2 text-sm"
                href={`/products/${product.id}`}
              >
                View Details
              </LinkButton>
            ) : (
              <Button className="items-center gap-2 text-sm">
                <FiShoppingCart />
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div
        key={product.id}
        className="w-full cursor-pointer overflow-hidden rounded p-4 transition-all duration-300 group-hover:-translate-y-2 group-hover:transform group-hover:shadow-lg"
        onClick={handleOnClick}
      >
        <div className="relative">
          <div className="overflow-hidden rounded border text-center">
            {product.media.length && product.media[0]?.path ? (
              <div>
                <img
                  className="max-w-full h-auto"
                  src={generateImageUrl(product.media[0].path)}
                  height={400}
                  width={400}
                  alt="product-image"
                />
              </div>
            ) : (
              <div className="flex h-[265px] w-full items-center justify-center border-gray-200 bg-[#F8F9F8] ">
                <PlaceHolderImage width={70} height={70} />
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <h6 className="font-medium group-hover:hidden">{product.title}</h6>
          <div className="text-center">
            {product.hasVariation ? (
              <LinkButton
                className="hidden items-center gap-2 text-sm shadow-lg group-hover:inline-flex"
                href={`/products/${product.id}`}
              >
                View Details
              </LinkButton>
            ) : (
              <Button className="hidden items-center gap-2 text-sm shadow-lg group-hover:inline-flex">
                <FiShoppingCart />
                {'Add to Cart'}
              </Button>
            )}
          </div>
          <div className="mt-2">
            <div className="flex lg:flex-row flex-col lg:items-center lg:justify-between">
              <div>
                <span className="font-bold group-hover:text-gray-600">
                  {formatCurrency(
                    product.salePrice ? product.salePrice : product.price,
                    2
                  )}
                </span>
                {product.salePrice && (
                  <span className="ml-2 text-sm text-gray-400 line-through">
                    {formatCurrency(product.price, 2)}
                  </span>
                )}
              </div>
              <div className="mt-2 lg:mt-0">
                <div className="flex items-center gap-1">
                  <Rating count={5} value={product.averageRating} size={14} />
                  <span className="text-sm font-medium text-gray-400">
                    (
                    {product.averageRating
                      ? product.averageRating.toFixed(1)
                      : 0}
                    )
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
