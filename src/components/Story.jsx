import { FaTelegramPlane } from "react-icons/fa";
import { CustomContext } from './../layout/CustomContext';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export const Story = () => {
    const openMode = CustomContext();
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
    return (
        <div className={`h-screen w-full sm:py-10 flex sm:flex-col items-center justify-between text-black relative sm:px-5 md:px-10 px-24 shadow-[0_0_10px_rgba(0,0,0,0.1)] ${openMode && "bg-gray-700 overflow-hidden"}`} data-aos="slide-left">
            <div className="w-1/2 sm:w-full sm:h-1/2">
                <p className={`text-4xl sm:text-3xl font-bold text-gray-700 ${openMode && "text-white"} w-10/12`}>Story Behind Our Digital Agency</p>

                <p className={`text-2xl sm:text-xl font-normal mt-4 ${openMode && "text-white"} text-gray-500 leading-relaxed w-11/12`}>Onekit is the leading digital marketing agency in New York. We are striving to provide integrated digital marketing solutions.</p>
                <button className={`flex items-center justify-center bg-purple-950 ${openMode && "bg-purple-500"} text-white px-9 py-3 text-xl gap-x-3 rounded-md sm:mt-5 mt-10 hover:bg-purple-800 transition-all duration-300 hover:-translate-y-1`}><FaTelegramPlane />Our team</button>
            </div>
            <div className="w-1/2 sm:w-full sm:h-1/2 flex items-center justify-center relative">
                <img src="/purple-laptop.jpg" alt="" className="rounded-md" />

                <div className=" absolute size-20 bg-white rounded-full flex items-center justify-center before:absolute before:size-full before:content-[''] before:bg-transparent before:rounded-full before:hover:scale-150 before:hover:opacity-0 before:hover:bg-gray-200 before:transition-all before:duration-500 after:absolute after:size-full after:content-[''] after:bg-transparent after:rounded-full after:hover:scale-150 after:hover:opacity-0 after:hover:bg-gray-300 after:transition-all after:duration-500 after:delay-100 cursor-pointer">
                    <div className=" absolute video size-4 bg-black rotate-90"></div>
                </div>
            </div>
        </div>
    );
}