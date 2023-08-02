// import StoreCardLoader from '../../../../components/loaders/StoreCardLoader'
import classNames from 'classnames';
import { useEffect, useState } from 'react';
// import LinkButton from "../../shared/LinkButton";
import VendorCard from './VendorCard';
import { useBuilderConfigContext } from '@/contexts/config-context';

const VendorSection = () => {
  const [filter, setFilter] = useState('popular');
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { axios, catalogConf } = useBuilderConfigContext();

  const fetchVendors = async () => {
    try {
      const res = await axios.get(
        `api/v1/vendors?filter=${filter}`,
        catalogConf
      );

      setStores(res.data.data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchVendors();
  }, [filter]);
  return (
    <div className="container">
      <div className="">
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setFilter('popular')}
            className={classNames(
              'py-2 text-sm hover:text-purple-500',
              filter === 'popular'
                ? 'border-b border-purple-500 text-purple-500'
                : 'text-gray-500'
            )}
          >
            Popular
          </button>
          <button
            onClick={() => setFilter('best-seller')}
            className={classNames(
              'py-2 text-sm hover:text-purple-500',
              filter === 'best-seller'
                ? 'border-b border-purple-500 text-purple-500'
                : 'text-gray-500'
            )}
          >
            Best Seller
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={classNames(
              'py-2 text-sm hover:text-purple-500',
              filter === 'featured'
                ? 'border-b border-purple-500 text-purple-500'
                : 'text-gray-500'
            )}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter('newest')}
            className={classNames(
              'py-2 text-sm hover:text-purple-500',
              filter === 'newest'
                ? 'border-b border-purple-500 text-purple-500'
                : 'text-gray-500'
            )}
          >
            New
          </button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {isLoading ? (
            // <StoreCardLoader count={8} />
            <p>Loading</p>
          ) : (
            stores
              ?.filter((_, index) => index < 8)
              .map((store, index) => {
                return <VendorCard vendor={store} key={index} />;
              })
          )}
        </div>
      </div>
      {/* <div className="mt-12 text-center">
        <LinkButton href="/stores">View More</LinkButton>
      </div> */}
    </div>
  );
};

export default VendorSection;
