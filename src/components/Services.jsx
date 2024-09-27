import { ServiceCard } from "./SercivesCard"
import { MdMonitor } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { CustomContext } from "../layout/CustomContext";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Services = () => {
    const openMode = CustomContext();
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])

    return(
        <div className={`w-full sm:py-10 md:px-10 sm:p-5 p-20 grid sm:grid-cols-1 md:grid-cols-2 sm:grid-rows-4 md:grid-rows-3 grid-cols-3 grid-rows-2 gap-x-10 gap-y-16 sm:gap-x-5 ${openMode && "bg-gray-700 "}`} data-aos="zoom-in">
            <ServiceCard servicesIcon={<MdMonitor />} mode={openMode} service="Web Development"/>
            <ServiceCard servicesIcon={<MdIncompleteCircle />} mode={openMode} service="Digital Marketing"/>
            <ServiceCard servicesIcon={<IoIosSearch />} mode={openMode} service="Search Engine Optimization"/>
            <ServiceCard servicesIcon={<IoLogoFacebook />} mode={openMode} service="Social Media Marketing"/>
            <ServiceCard servicesIcon={<CiMobile3 />} mode={openMode} service="Mobile Apps Marketing"/>
            <ServiceCard servicesIcon={<FaGoogle />} mode={openMode} service="Google Suite"/>
        </div>
    )
}