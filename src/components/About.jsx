import { CustomContext } from "../layout/CustomContext";
import { MansProfile } from "./MansProfile"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const About = () => {
    const openMode = CustomContext();
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
    
    const about = {
        man1: "Founder CEO",
        man2: "Product Manager",
        man3: "Marketing",
        man4: "Senior Designer",
    }
    const name = {
        man1: "Joe Antonio",
        man2: "Thony Khan",
        man3: "John Timito",
        man4: "Daniel Emo",
    }
    return (
        <div className={`h-fit w-full sm:px-5 sm:py-8 p-20 md:p-10 grid gap-10 sm:gap-x-0 grid-cols-2 grid-rows-2  md:grid-cols-1 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-4 relative z-10 ${openMode ? "bg-gray-700" : "bg-white"}`} data-aos="slide-right">
            <MansProfile image="/avatar1.png" about={about.man1} name={name.man1} mode={openMode}/>
            <MansProfile image="/avatar2.png" about={about.man2} name={name.man2} mode={openMode}/>
            <MansProfile image="/avatar3.png" about={about.man3} name={name.man3} mode={openMode}/>
            <MansProfile image="/avatar4.png" about={about.man4} name={name.man4} mode={openMode}/>
        </div>
    )
}