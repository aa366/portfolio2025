// Project 1: E-commerce Website
// Description: What it does (e.g., "A full-stack online store with cart & payments").
// Tech Used: HTML/CSS, JavaScript, React? Node.js? (List what you actually used).
// Challenges & Solutions: Example: "Learned to manage state with Redux."
// Links: GitHub (if public) / Live Demo (if hosted).
// Project 2: This Portfolio Itself (Yes, it counts!)
// Description: "A responsive portfolio built with [your tech stack]."
// What You Learned: "Improved my CSS Grid skills" or "First time using [XYZ]."
// (Tip: Add mockups/screenshots to make it visual.)
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