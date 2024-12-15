'use client';
import Head from 'next/head';
import Header from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';
import SmallIdea from "@/components/SmallIdea";
import Footer from "@/components/Footer"



// Import product images
import First from '../../public/images/firstimage.jpeg';
import Second from '../../public/images/secondimage.jpeg';
import Third from '../../public/images/thirdimage.jpeg';
import Fourth from '../../public/images/fourthimage.jpeg';

// Sample Product Data
const products = [
  { image: First, name: 'The Dandy Chair', price: '£250' },
  { image: Second, name: 'Rustic Vase Set', price: '£165' },
  { image: Third, name: 'The Silky Vase', price: '£125' },
  { image: Fourth, name: 'The Lucy Lamp', price: '£199' },
  { image: First, name: 'Elegant Sofa', price: '£450' },
  { image: Second, name: 'Modern Shelf', price: '£300' },
  { image: Third, name: 'Cozy Blanket', price: '£75' },
  { image: Fourth, name: 'Wooden Table', price: '£299' },
  { image: First, name: 'Stylish Mirror', price: '£180' },
  { image: Second, name: 'Antique Clock', price: '£230' },
  { image: Third, name: 'Luxury Carpet', price: '£325' },
  { image: Fourth, name: 'Vintage Lamp', price: '£199' },
];

export default function Home() {
  return (
    <div>
         <Header/>
      <Head>
        <title>Product Showcase</title>
        <meta
          name="description"
          content="Browse our curated selection of elegant and affordable products, including chairs, vases, and lamps."
        />
      </Head>
     
      <main className="bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-6xl px-6 py-12">
          {/* Page Title */}
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
            Product Showcase
          </h1>

          {/* View All Products Section */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            View All Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
Go to Home
            </Link>
          </div>


        </div>
      </main>
      <SmallIdea/>
      <Footer/>

    </div>
  );
}
