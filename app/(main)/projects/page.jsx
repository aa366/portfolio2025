import Expertise from "@/components/projects/expertise"
import Projects from "@/components/projects/projects"
import WillLearn from "@/components/projects/willLearn"

const page = () => {
   

  return (
    <div className='flex flex-col gap-5 items-center mt-5 mb-5'>
    <Expertise />
    <Projects />
    <WillLearn />
    </div>
  )
}

export default page