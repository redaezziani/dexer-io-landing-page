import Haeder from "@/components/custom/header";
import HeroSection from "@/components/custom/hero-section";
import SetepSection from "@/components/custom/pricing-section";


export default function Home() {
  return (
  <div className=" relative flex-col md:px-0 px-6   w-full flex justify-start items-center min-h-screen overflow-x-hidden">
    <div className="w-full absolute z-0 h-screen bg-gradient-to-b from-sky-400/10 via-amber-50 to-transparent"/>
    <Haeder />
    <HeroSection />
    <SetepSection/>
  </div>
  );
}

// lets make pricin
