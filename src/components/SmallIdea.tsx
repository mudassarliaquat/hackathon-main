import Image from 'next/image';
import React from 'react';
import SmallIdea from '../public/images/smallidea.jpeg';

const SmallIdeaSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full py-12 px-6 md:px-12">
      {/* Left Content */}
      <div className="flex flex-col justify-center items-start bg-indigo-900 text-white p-8 md:w-1/2 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          It started with a small idea
        </h2>
        <p className="text-md md:text-lg mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-700 transition-all duration-300">
          View collection
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src={SmallIdea}
          alt="Modern chair setup"
          layout="responsive"
          width={800}
          height={400}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default SmallIdeaSection;
