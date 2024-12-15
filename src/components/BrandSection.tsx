import React from 'react';
import Link from 'next/link';

const BrandSection = () => {
  return (
    <>
    <div className="flex lg:flex-row justify-center items-center bg-white py-10 px-6 lg:px-12">
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-2xl space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
          A brand built on the love of craftsmanship, quality and outstanding customer service
        </h2>
      </div>
        <Link
          href="/collection"
          className="py-3 px-8 bg-gray-800 text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          View our products
        </Link>
    </div>
    
    </>
  );
};

export default BrandSection;
