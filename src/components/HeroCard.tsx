import { FaShippingFast, FaHammer, FaTags, FaRecycle } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <main className=" bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 py-12">
          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            What makes our brand different
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center text-black mb-4">
                <FaShippingFast className="text-4xl" />
              </div>
              <h2 className="text-base font-bold text-gray-800 mb-2">
                Next day as standard
              </h2>
              <p className="text-sm text-gray-600">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center text-black mb-4">
                <FaHammer className="text-4xl" />
              </div>
              <h2 className="text-base font-bold text-gray-800 mb-2">
                Made by true artisans
              </h2>
              <p className="text-sm text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center text-black mb-4">
                <FaTags className="text-4xl" />
              </div>
              <h2 className="text-base font-bold text-gray-800 mb-2">
                Unbeatable prices
              </h2>
              <p className="text-sm text-gray-600">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center text-black mb-4">
                <FaRecycle className="text-4xl" />
              </div>
              <h2 className="text-base font-bold text-gray-800 mb-2">
                Recycled packaging
              </h2>
              <p className="text-sm text-gray-600">
                We use 100% recycled to ensure our footprint is more manageable.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
