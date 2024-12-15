import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1640] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {/* Menu Section */}
        <div>
          <h5 className="font-bold text-lg md:text-xl mb-4">Menu</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">New arrivals</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Best sellers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Recently viewed</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Popular this week</a>
            </li>
            <li>
              <a href="#" className="hover:underline">All products</a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <h5 className="font-bold text-lg md:text-xl mb-4">Categories</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Crockery</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Furniture</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Homeware</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Plant pots</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Chairs</a>
            </li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h5 className="font-bold text-lg md:text-xl mb-4">Our company</h5>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">About us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Vacancies</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Returns policy</a>
            </li>
          </ul>
        </div>

        {/* Join Our Mailing List Section */}
        <div>
          <h5 className="font-bold text-lg md:text-xl mb-4">Join our mailing list</h5>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#1a1640] font-bold rounded-r-lg hover:bg-gray-200"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-sm sm:text-base">Copyright 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:opacity-75 text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75 text-white">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75 text-white">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75 text-white">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:opacity-75 text-white">
            <FaPinterest className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
