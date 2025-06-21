import Hero from "@/components/home/Hero";
import FeaturedProject from "@/components/home/FeaturedProject ";
import AboutMeTeaser from "@/components/home/AboutMeTeaser";

export default async function Home() {
  
    // await new Promise((resolve)=>setTimeout(resolve,3000))
  return (
   <main className=" flex flex-col gap-5 justify-center items-center py-10 z-1">
    <Hero />
      <FeaturedProject />
    <AboutMeTeaser />
   </main>
  );
}
