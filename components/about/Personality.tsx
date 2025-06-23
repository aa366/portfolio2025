import React from "react";
import data from "@/data/home.json";
const Personality = () => {
  const { personal: P } = data;

  return (
   
      <div className="flex  justify-self-center gap-[5%] w-fit flex-col md:flex-row items-center lg:w-[80%] p-[2%] ">
        <img
          src={P.img}
          alt=" "
          className="w-[40%] rounded-full aspect-square object-contain"
        />
        <div className="w-fit">
          <h1 className="text-3xl font-bold text-center text-amber-700 dark:text-amber-300 ">
            {P.Name}
          </h1>
          <p className="text-[1rem] font-bold text-center sm:text-2xl">
            {P.Description}
          </p>
          <div className="flex justify-between my-[3%]">
            <a className="p-[3px] relative cursor-pointer w-fit flex " href={P.resume} target="_blanck">
             
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-gray-200 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  Resume
                </div>
            
            </a>
            <a className="p-[3px] relative cursor-pointer w-fit flex " href={P.coverLetter} target="_blanck">
             
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-gray-200 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent">
                  Cover Letter
                </div>
            
            </a>
          </div>
        </div>
      </div>
  
  );
};

export default Personality;
