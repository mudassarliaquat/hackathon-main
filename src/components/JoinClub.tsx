import Image from 'next/image';
import React from 'react';
import JoinClub from '../public/images/services.jpeg';

const JoinClubSection = () => {
  return (
<section className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={JoinClub}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-black px-6 md:px-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
  Join the club and get the benefits
</h2>
<p className="text-sm md:text-base mb-6">
  Sign up for our newsletter and receive exclusive offers on new ranges,
  sales, pop-up stores, and more.
</p>

        {/* Features */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base mb-6">
          <span className="flex items-center gap-1">
            <span>✅</span> Exclusive offers
          </span>
          <span className="flex items-center gap-1">
            <span>✅</span> Free events
          </span>
          <span className="flex items-center gap-1">
            <span>✅</span> Large discounts
          </span>
        </div>

        {/* Signup Form */}
        <form className="flex justify-center items-center gap-2">
  <input
    type="email"
    placeholder="your@email.com"
    className="px-4 py-2 rounded-l-md bg-white text-black w-full md:w-3/4 focus:outline-none"
  />
  <button
    type="submit"
    className="px-6 py-2 bg-indigo-900 text-white rounded-r-md hover:bg-indigo-700"
  >
    Sign up
  </button>
</form>
      </div>
    </section>
  );
};

export default JoinClubSection;
