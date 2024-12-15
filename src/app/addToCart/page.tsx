'use client';
import React from "react";
import Link from 'next/link';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import First from '../../public/images/firstimage.jpeg';
import Second from '../../public/images/secondimage.jpeg';

const products = [
  { image: First, name: 'The Dandy Chair', price: '£250' },
  { image: Second, name: 'Rustic Vase Set', price: '£165' },
];

const Cart = () => {
  return (
    <div>
      <Header />

    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your shopping cart</h1>
        <div className="space-y-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded"
                  width={80}
                  height={80}
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-700">{product.name}</h2>
                  <p className="font-semibold text-gray-800 mt-1">{product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 border px-3 py-1 rounded">-</button>
                <span className="font-medium">1</span>
                <button className="text-gray-500 border px-3 py-1 rounded">+</button>
                <p className="font-semibold text-gray-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-8 border-t pt-4">
          <div className="flex items-center justify-between text-lg font-medium">
            <span>Subtotal</span>
            <span>£415</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Taxes and shipping are calculated at checkout</p>
             <Link
            href="/collection"
            className="bg-gray-300 text-black px-9 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to checkout
          </Link>
        </div>
      
      </div>
    </div>
    <Footer />

    </div>
  );
};

export default Cart;
