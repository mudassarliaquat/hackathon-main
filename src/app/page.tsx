import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HeroCard from "@/components/HeroCard"
import HeroProduct from "@/components/HeroProduct"
import SmallIdea from "@/components/SmallIdea"
import Footer from "@/components/Footer"
import JoinClubSection from "@/components/JoinClub"

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <HeroCard/>
      <HeroProduct/>
      <SmallIdea/>
      <JoinClubSection/>
    <Footer/>
 </div>
  )
}

export default page
