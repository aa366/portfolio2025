
import Personality from "@/components/about/Personality"
import Expertise from "@/components/projects/expertise"
const page = () => {
  return (
    <main className="w-full flex flex-col items-center gap-[5%] my-5 ">
        <Personality />
        <Expertise classes="hidden"/>
        
    </main>
  )
}

export default page