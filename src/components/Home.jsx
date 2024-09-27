import { FaArrowRight } from "react-icons/fa";
import { Services } from "./Services";
import { Story } from "./Story";
import { About } from "./About";
import { CompanyProfile } from "./CompanyProfile";
import { Blogs } from "./Blogs";
import { Reviews } from "./Reviews";
import { Contact } from './Contact';
import { CustomContext } from './../layout/CustomContext';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Home = () => {
    const openMode = CustomContext();
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])

    return (
        <>
            <div className={`h-screen w-full relative bg-gradient-to-b from-blue-700 to-purple-700 overflow-hidden ${openMode ? "from-gray-900 to-stone-500" : "home"}`}>
                <div className="h-screen w-full flex items-center justify-between text-white relative sm:px-5 md:px-10 px-20" data-aos="fade-down">
                    <div className={`absolute size-[500px] rounded-full -left-20 -top-20 z-10 ${openMode ? "bg-gray-700 ": "bg-blue-700"}`}></div>
                    <div className={`absolute size-[500px] rounded-full left-0 -top-20 opacity-30 ${openMode ? "bg-gray-400 ": "bg-blue-600"}`}></div>

                    <div className="w-1/2 h-full flex flex-col items-start justify-center relative gap-5 z-10">

                        <p className={`text-5xl font-extrabold leading-tight text-transparent bg-gradient-to-r ${openMode ? "from-pink-500 via-lime-400 to-cyan-500" : "from-stone-300 via-fuchsia-400 to-green-500"} bg-clip-text`}>We are Professional digital agency</p>

                        <p className="text-xl">We serve various services such as search engine marketing, online advertising, web design and development, and e-commerce consulting.
                        </p>
                        <button className={`flex items-center justify-between gap-4 mt-4 px-10 sm:px-2 py-3 rounded-md text-lg relative transition z-50 duration-300 hover:-translate-y-2 ${openMode ? "bg-gray-900 text-white": "bg-yellow-400 text-black"}`}><FaArrowRight />Our services</button>
                    </div>
                    <div className="h-full sm:z-10 w-1/2 flex items-center justify-center sm:relative">
                        <div className="w-8/12 h-3/6 sm:size-80 sm:absolute md:size-80 rounded-[30%_70%_70%_30%_/_53%_33%_67%_47%] border-4 overflow-hidden sm:left-0 sm:top-1/4 hover:-left-20 transition-all duration-500 cursor-pointer">
                            <img src="company1.jpg" alt="" className="size-full object-cover object-center" />
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=" -z-10 absolute -bottom-px"><path fill={`${openMode ? "#374151": "#1d4ed8"}`} fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,208C672,213,768,267,864,245.3C960,224,1056,128,1152,112C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <Services />
            <Story/>
            <About/>
            <CompanyProfile mode={openMode}/>
            <Blogs mode={openMode}/>
            <Reviews/>
            <Contact/>
        </>
    )
}