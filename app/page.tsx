import HeroSection from "./components/HeroSection";
import AdSection from "./components/AdSection";
import BrandsSection from "./components/BrandsSection";

export default function Home() {

  return (
    <div className="flex flex-col items-center w-full h-full">
      <HeroSection />
      <AdSection />
      <BrandsSection />
    </div>
  )
}
