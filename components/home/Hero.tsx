import data from "@/data/home.json";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// async function getData() {
//   const res = await fetch('@/data/home.json')
//   return res.json();
// }

const Hero = async () => {
  const { personal: infos } = data;


  return (
    <section className="flex flex-col justify-center m-4 px-[5%]">
      <h1 className="text-center text-3xl p-3">
        Hi, I'm{" "}
        <span className="text-purple-500 font-bold">{infos.Name + " "}</span>a{" "}
        <span className="text-purple-500 font-bold">{infos.Role}</span>
      </h1>
      <TextGenerateEffect words={infos.Description} duration={.05} className="font-bold text-xl" divClass = "text-center "/>
     
    </section>
  );
};

export default Hero;
