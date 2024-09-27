import { FaRegUser } from "react-icons/fa6";
import { TfiBag } from "react-icons/tfi";
import { FaAward } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const CompanyProfile = ({mode}) => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);
    
    return(
        <div className={`h-80 sm:h-screen w-full bg-blue-700 ${mode && "bg-gray-700"} p-20 sm:px-5 sm:py-16 md:grid md:grid-rows-2 md:grid-cols-2 flex gap-x-8 sm:gap-x-0 md:p-10 md:gap-5 sm:gap-y-8 sm:flex-col items-center justify-center relative z-10`} data-aos="fade-up">
            <div className={`h-4/5 w-1/4 md:size-full sm:w-full sm:h-1/4 ${mode ? "bg-gray-400 text-white" : "bg-white text-violet-800"} rounded-xl flex gap-x-8 items-center justify-center`}>
                <div className="W-1/2 text-6xl font-semibold"><FaRegUser /></div>
                <div className="W-1/2 flex flex-col">
                    <p className="text-3xl font-semibold">1200</p>
                    <p className="">CUSTOMERS</p>
                </div>
            </div>
            <div className={`h-4/5 w-1/4 md:size-full sm:w-full sm:h-1/4 ${mode ? "bg-gray-400 text-white" : "bg-white text-violet-800"} rounded-xl flex gap-x-8 items-center justify-center`}>
                <div className="W-1/2 text-6xl font-semibold"><TfiBag /></div>
                <div className="W-1/2 flex flex-col">
                    <p className="text-3xl font-semibold">700</p>
                    <p className="">COMPANY</p>
                </div>
            </div>
            <div className={`h-4/5 w-1/4 md:size-full sm:w-full sm:h-1/4 ${mode ? "bg-gray-400 text-white" : "bg-white text-violet-800"} rounded-xl flex gap-x-8 items-center justify-center`}>
                <div className="W-1/2 text-6xl font-semibold"><FaAward /></div>
                <div className="W-1/2 flex flex-col">
                    <p className="text-3xl font-semibold">20</p>
                    <p className="">AWARDS</p>
                </div>
            </div>
            <div className={`h-4/5 w-1/4 md:size-full sm:w-full sm:h-1/4 ${mode ? "bg-gray-400 text-white" : "bg-white text-violet-800"} rounded-xl flex gap-x-8 items-center justify-center`}>
                <div className="W-1/2 text-6xl font-semibold"><FaFileInvoiceDollar /></div>
                <div className="W-1/2 flex flex-col">
                    <p className="text-3xl font-semibold">450</p>
                    <p className="">PROJECT</p>
                </div>
            </div>
        </div>
    )
}