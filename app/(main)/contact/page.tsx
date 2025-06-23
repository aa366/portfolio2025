import data from "@/data/home.json"
import dataP from "@/data/projects.json"
import { timeStamp } from "console";

const page =  () => {

const { icon  } = dataP;
  const { contactLinks} = data;


  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-[5%]" >
    
  
        <a href='mailto:bad3662067@gmail.com' className="p-[3px] relative cursor-pointer w-fit flex ">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-gray-200 text-black dark:bg-black dark:text-white rounded-[6px]  relative group transition duration-200  hover:bg-transparent font-bold">
           Let's get in Touch
          </div>
      </a>
      <div className="flex gap-[5%] p-3 bg-gray-300 rounded-2xl">
        {contactLinks.map((ele)=>(
          <a href={ele[ele.item]} target="_blanck" key={ele.item+timeStamp()}>

            <img src={icon[ele.item]} alt={ele.item} className="w-20 h-20"/>
          </a>
        ))}
      </div>

    
    </div>
  );
};

export default page;
