"use client"; // Marks the component as a Client Component
import React from "react";
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Header = () => {
  const router = useRouter(); // Initialize useRouter for navigation

  return (
    <header className="border-b shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left: Search Bar */}
        <div className="flex items-center space-x-2">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
        </div>

        {/* Center: Logo */}
        <div className="text-lg font-bold text-center flex-1 sm:text-xl">
          Avion
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* Shopping Cart Icon */}
          <ShoppingCartIcon
            className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700"
            onClick={() => router.push("/addToCart")} 
          />
          <UserIcon className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={() => router.push("/about")} />
        </div>
      </div>

      {/* Bottom Line: Navigation */}
      <nav className="hidden sm:flex justify-center space-x-8 text-gray-700">
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Plant Pots</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Couches</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Tables</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Others</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Cookery</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Tableware</a>
        <a href="#" className="hover:text-blue-600" onClick={() => router.push("/product")}>Cutlery</a>
      </nav>

      {/* Mobile Navigation (Hamburger Menu) */}
      <div className="sm:hidden flex justify-center py-2">
        <button className="text-gray-700 hover:text-blue-600"></button>
      </div>
    </header>
  );
};

export default Header;
