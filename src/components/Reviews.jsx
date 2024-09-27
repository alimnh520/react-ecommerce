import { ReviewSlider } from "./ReviewsSlider"
import { CustomContext } from './../layout/CustomContext';
import ModeData from "../layout/ModeContext";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Reviews = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
    const openMode = CustomContext();
    return(
        <div className={`h-screen sm:py-7 p-20 sm:px-5 flex flex-col items-center ${openMode ? "bg-gray-700 text-white" : "bg-stone-100"}`} data-aos="flip-down">
            <p className="text-4xl font-bold relative before:absolute before:content-[''] before:h-0.5 before:w-20 before:bg-yellow-400 before:-bottom-7 before:left-7">Reviews</p>
            <p className={`text-xl ${openMode ? "text-white" : "text-gray-600"} mt-10`}>Do not take our words, check out what people says.!</p>
            <ReviewSlider/>
        </div>
    )
}