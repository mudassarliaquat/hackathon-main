'use client';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCart";
import HeroProduct from "@/components/HeroProduct";
import HeroCard from "@/components/HeroCard";
import JoinClubSection from "@/components/JoinClub"




const Product = () => {
    return (
      <div>
        <Header />
        <ProductCard />
        <HeroProduct />
        <JoinClubSection />
        <HeroCard />
        <Footer/>
    </div>
  );
};

export default Product;