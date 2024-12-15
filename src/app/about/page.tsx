'use client';
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandSection from '@/components/BrandSection';  
import SmallIdea from "@/components/SmallIdea"; 
import AboutHero from "@/components/AboutHero";
import HeroCard from "@/components/HeroCard";
import JoinClubSection from "@/components/JoinClub"




const About = () => {
    return (
      <div>
        <Header />
      <BrandSection />
        <SmallIdea />
        <AboutHero />
        <JoinClubSection />
        <HeroCard />
        <Footer/>
        </div>
  );
};

export default About;