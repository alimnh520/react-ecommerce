import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export const Blogs = ({mode}) => {useEffect(() => {
    AOS.init({duration: 1000});
},[])
    return (
        <div className={`h-screen sm:h-auto md:h-fit sm:px-5 sm:py-7 md:p-10 px-20 py-16 flex flex-col items-center ${mode && "bg-gray-700 text-white"}`} data-aos="slide-down">

            <p className={`text-4xl font-bold relative before:absolute before:content-[''] before:h-0.5 before:w-20 ${mode ? "before:bg-white" : "before:bg-purple-800"} before:-bottom-7 before:left-2`}>Blogs</p>

            <div className="w-full h-full mt-20 grid grid-cols-3 sm:grid sm:grid-cols-1 md:grid-cols-1 md:grid-rows-3 sm:grid-rows-3 sm:gap-x-0 sm:gap-y-10 md:gap-y-10 gap-x-12 z-10">
                <div className="sm:h-48 md:h-56 flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 relative rounded-xl overflow-hidden">
                    <img src="/blog1.jpg" alt="" className="hover:scale-150  transition-all cursor-pointer duration-300 sm:w-full object-cover sm:h-full md:w-full md:h-full" />

                    <div className=" absolute bg-stone-100 right-0 text-gray-700 p-3">
                        <p className="text-3xl">12</p>
                        <p className="text-sm">May</p>
                    </div>
                    <div className={`pt-6 sm:p-3 z-20 ${mode ? "bg-gray-500 p-3 rounded-b-xl" : "bg-white"} md:p-6`}>
                        <p className="text-2xl sm:text-xl font-semibold hover:text-violet-800 w-fit cursor-pointer">New UI Design for 2020</p>
                        <p className="text-lg sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Lorem ipsum is text industry.</p>
                    </div>
                </div>
                <div className="sm:h-48 md:h-56 flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 relative rounded-xl overflow-hidden">
                    <img src="/blog2.jpg" alt="" className="hover:scale-150  transition-all cursor-pointer duration-300 sm:w-full object-cover sm:h-full md:w-full md:h-full" />
                    <div className=" absolute bg-stone-100 right-0 text-gray-700 p-3">
                        <p className="text-3xl">12</p>
                        <p className="text-sm">May</p>
                    </div>
                    <div className={`pt-6 sm:p-3 z-20 ${mode ? "bg-gray-500 p-3 rounded-b-xl" : "bg-white"} md:p-6`}>
                        <p className="text-2xl sm:text-xl font-semibold hover:text-violet-800 w-fit cursor-pointer">Most Popular Template</p>
                        <p className="text-lg sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Lorem ipsum is text industry.</p>
                    </div>
                </div>
                <div className="sm:h-48 md:h-56 flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 md:grid md:grid-cols-2 md:grid-rows-1 relative rounded-xl overflow-hidden">
                    <img src="/blog3.jpg" alt="" className="hover:scale-150  transition-all cursor-pointer duration-300 sm:w-full object-cover sm:h-full md:w-full md:h-full" />
                    <div className=" absolute bg-stone-100 right-0 text-gray-700 p-3">
                        <p className="text-3xl">12</p>
                        <p className="text-sm">May</p>
                    </div>
                    <div className={`pt-6 sm:p-3 z-20 ${mode ? "bg-gray-500 p-3 rounded-b-xl" : "bg-white"} md:p-6`}>
                        <p className="text-2xl sm:text-xl font-semibold hover:text-violet-800 w-fit cursor-pointer">Great Layout and Grid</p>
                        <p className="text-lg sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Lorem ipsum is text industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}