import Link from "next/link";
import data from "@/data/home.json";

const AboutMeTeaser = () => {
  return (
    <div className="">
      {data.personal.aboutTeaser.map((ele, idx) => (
        <h1 key={ele + idx} className="font-bold">
          {ele}
        </h1>
      ))}
      <button className="p-[3px] relative cursor-pointer w-fit flex justify-self-center m-3">
        <Link href={`/about `} className="flex w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-gray-200 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent ">
            Read More
          </div>
        </Link>
      </button>
    </div>
  );
};

export default AboutMeTeaser;
