import Image from 'next/image';
import heroImage from '../public/images/hero.jpeg';

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src={heroImage}
            alt="Avion Furniture"
            width={800}
          height={400}
          className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-10">
          <h1 className="text-4xl font-bold mb-4">Our service isn't just personal, it's actually hyper personally exquisite</h1>
          <p className="text-lg mb-6">
            When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="text-lg mb-6">
            Handmade and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;