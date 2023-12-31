import { Category } from '@/types/catalog';
import { generateImageUrl } from '@/utils';
import Link from 'next/link';
import PlaceHolderImage from '../../../shared/Placeholder';
import { FC } from 'react';

type Props = {
  category: Category;
};

const CategoryCard: FC<Props> = ({ category }) => {
  return (
    <div>
      {category.media.length && category.media[0]?.path ? (
        <div className="relative mx-auto h-[150px] w-[150px] overflow-hidden rounded-full border">
          <img
            className="max-w-full h-auto"
            src={generateImageUrl(category.media[0]?.path)}
            alt={category.name}
            width={150}
            height={150}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center border h-[150px] w-[150px] rounded-full">
          <PlaceHolderImage />
        </div>
      )}
      <div className="mt-5">
        <Link
          href={`/${category.slug}`}
          className="block text-center text-sm font-bold hover:text-primary-500"
        >
          {category.name}
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
