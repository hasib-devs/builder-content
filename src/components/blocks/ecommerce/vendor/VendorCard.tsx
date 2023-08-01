import PlaceHolderImage from '../../../../components/shared/Placeholder'
import Rating from '../../../../components/shared/Rating'
import StoreIcon from '../../../../components/shared/StoreIcon'
import { Vendor } from '../../../../types'
import { generateImageUrl } from '../../../../utils'
// import { useState } from 'react'
import Image from 'next/image'
import React from 'react'

type Props = {
  vendor: Vendor
}

const VendorCard = ({ vendor }: Props) => {
  // const [isImageLoading, setIsImageLoading] = useState(true)
  // const router = useRouter();

  return (
    <div
      // onClick={() => router.push(`/stores/${vendor?.subdomain}`)}
      className="cursor-pointer rounded bg-white shadow transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative overflow-hidden text-center">
        {vendor?.banner ? (
          <Image
            src={generateImageUrl(vendor?.banner?.path)}
            height={100}
            width={280}
            alt="store-banner"
          />
        ) : (
          <div className="flex h-[100px] w-full items-center justify-center border-b">
            <PlaceHolderImage />
          </div>
        )}
        {/* {isImageLoading && <Skeleton className="absolute top-0 left-0 h-full w-full" />} */}
      </div>
      <div className="p-5">
        {vendor?.logo ? (
          <Image
            src={generateImageUrl(vendor?.logo?.path)}
            height={45}
            width={45}
            className="rounded-full"
            alt="store-logo"
          />
        ) : (
          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full border bg-[#f8f9f8]">
            <StoreIcon />
          </div>
        )}

        <h6 className="mt-2 font-semibold">{vendor.storeName}</h6>
        <div className="flex items-center">
          <Rating count={5} value={5} className="mt-2" />
          <span className="mt-2 ml-2 text-gray-500">(50)</span>
        </div>
      </div>
    </div>
  )
}

export default VendorCard
