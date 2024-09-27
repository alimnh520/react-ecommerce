import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import { FaTwitter, FaYoutube ,FaFacebook ,FaVk ,FaLinkedin ,FaInstagram} from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
    return (
        <div className="h-[600px] sm:h-auto md:h-auto pt-14 md:pt-0 w-full bg-gray-700" data-aos="fade-up">
            <div className="h-5/6 grid gap-x-1 sm:grid-cols-1 sm:grid-rows-3 md:grid-rows-3 md:grid-cols-1 grid-cols-3 border-b border-b-blue-700">
                <div className="p-16 sm:p-5 md:px-10 md:py-5 md:mt-10 flex flex-col md:h-fit text-white">
                    <p className="text-2xl font-bold">About Us</p>
                    <p className="text-lg leading-snug my-5">TailwindCss template designer, we build web templates, themes and other goodies, putting a lot of love in every pixel and design.</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all flex items-center justify-start text-lg"> <FaLocationDot className="self-start mt-0.5 mr-2 text-2xl" />Khulna Shipyard Road, Jinnah Para, Hazi Abdul Malek Collage Road-01</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all flex items-center justify-start text-lg mt-2"><IoCallOutline className="mr-2 text-xl"/> +8801931039368</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all flex items-center justify-start text-lg mt-2"><CiMail className="mr-2 text-xl mt-0.5"/> alimnh412@gamil.com</p>
                </div>
                <div className="sm:p-5 md:px-10 md:py-5 py-16 px-4">
                    <p className="text-2xl font-bold text-white">Popular Links</p>
                    <div className="h-full grid grid-cols-2 gap-x-1 text-gray-300">
                        <div className="flex flex-col">
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-4"><MdArrowRight className="text-2xl mt-px" /> About us</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Contact us</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Privacy policy</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Term of use</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> GDPR</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Career</button>
                        </div>
                        <div className="">
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Latest post</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Popular post</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Blogs</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Events</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Fax</button>
                            <button className="hover:text-white transition-all flex items-center justify-start text-lg font-medium mt-3"><MdArrowRight className="text-2xl mt-px" /> Category</button>
                        </div>
                    </div>
                </div>
                <div className="sm:p-5 md:px-10 md:py-5 py-16 px-4 flex flex-col text-gray-100">
                    <p className="text-2xl font-bold">Newsletter</p>
                    <p className="text-lg leading-snug my-5">Subscribe to our mailing list to receives daily updates direct to your inbox!</p>
                    <div>
                        <input type="text" placeholder="Enter your email address" className='outline-none border px-4 text-lg rounded-tl-md rounded-bl-md border-gray-200 h-12 sm:w-8/12 focus:border-gray-400 transition-all duration-500' name="email" />
                        <button className="bg-yellow-400 text-lg font-medium px-9 sm:px-3 py-2.5 rounded-tr-md rounded-br-md text-gray-900">Subscribe</button>
                        <div className="flex items-center justify-start text-3xl gap-x-5  mt-8">
                            <FaFacebook  className="transition-all hover:scale-125 hover:text-blue-600 cursor-pointer"/>
                            <FaTwitter className="transition-all hover:scale-125 hover:text-blue-600 cursor-pointer"/>
                            <FaYoutube  className="transition-all hover:scale-125 hover:text-red-500 cursor-pointer"/>
                            <FaVk  className="transition-all hover:scale-125 hover:text-blue-500 cursor-pointer"/>
                            <FaLinkedin  className="transition-all hover:scale-125 hover:text-blue-500 cursor-pointer"/>
                            <FaInstagram className="transition-all hover:scale-125 hover:text-orange-400 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center mt-10 text-white text-lg font-normal">Copyright © Your Company | All rights reserved.</p>
        </div>
    )
}