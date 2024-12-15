import Image from 'next/image';
import FirstImage from '../public/images/firstimage.jpeg';

function ProductCard() {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row">
            <Image
                src={FirstImage}
                alt="The Dandy Chair"
                width={400}
                height={400}
                className="rounded-lg w-full md:w-1/2 object-cover"
            />
            <div className="md:ml-6 md:w-1/2">
                <h2 className="text-2xl font-bold mt-4 text-gray-800">The Dandy Chair</h2>
                <p className="text-lg text-gray-700 font-semibold">£250</p>

                <div className="text-gray-600 mt-4 space-y-2">
                    <p>A timeless design, featuring premium materials. One of our most iconic pieces.</p>
                    <p>Perfect for stylish living spaces with beech legs and lambskin leather upholstery.</p>
                    <ul className="list-disc pl-5">
                        <li>Premium material</li>
                        <li>Handmade upholstery</li>
                        <li>Quality timeless classic</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800">Dimensions</h3>
                    <ul className="list-none text-gray-700">
                        <li>Height: 110cm</li>
                        <li>Width: 75cm</li>
                        <li>Depth: 50cm</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                        <label className="text-gray-600 font-medium">Amount:</label>
                        <input 
                            type="number" 
                            min="1" 
                            defaultValue="1" 
                            className="border border-gray-300 rounded-md px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition-transform transform hover:scale-105">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
