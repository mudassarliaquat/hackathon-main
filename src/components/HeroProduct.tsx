'use client'; 
import Head from 'next/head';
import Image from 'next/image';
import First from '../public/images/firstimage.jpeg';
import Second from '../public/images/secondimage.jpeg';
import Third from '../public/images/thirdimage.jpeg';
import Fourth from '../public/images/fourthimage.jpeg';
import Link from 'next/link';


const products = [
  { image: First, name: 'The Dandy Chair', price: '£250' },
  { image: Second, name: 'Rustic Vase Set', price: '£165' },
  { image: Third, name: 'The Silky Vase', price: '£125' },
  { image: Fourth, name: 'The Lucy Lamp', price: '£199' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Showcase</title>
        <meta
          name="description"
          content="Browse our curated selection of elegant and affordable products, including chairs, vases, and lamps."
        />
      </Head>

      <main className="bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-6xl px-6 py-12">
          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Product Showcase
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
      <Link
        href="/collection"
        className="bg-gray-300 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Collection
      </Link>
    </div>
        </div>
      </main>
    </div>
  );
}
