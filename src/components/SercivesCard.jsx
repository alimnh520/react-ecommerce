import { IoAdd } from "react-icons/io5";

export const ServiceCard = ({servicesIcon,service,mode}) => {
    
    return(
        <>
            <div className={`h-52 rounded-md shadow-[0_0_20px_rgba(0,0,0,0.12)] relative flex flex-col items-center justify-center sm:px-3 sm:text-center md:text-center px-6 hover:-translate-y-3 transition duration-300 ${mode && "bg-gray-500"}`}>
                <p className=" absolute -top-5 text-4xl text-white rounded-full p-4 shadow-[0_0_5px_rgba(0,0,0,0.5)] bg-blue-900 sm:p-2.5">{servicesIcon}</p>
                <p className={`text-2xl font-medium ${mode && "text-white"}`}>{service}</p>
                <p className={`text-center mt-2 font-medium opacity-80 ${mode && "text-white"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className={`absolute -bottom-5 text-2xl p-2 rounded-full cursor-pointer text-gray-200 hover:text-purple-950 transition duration-300 shadow-[0_0_5px_rgba(0,0,0,0.5)] ${mode ? "bg-gray-400" : "bg-white"}`}><IoAdd /></button>
            </div>
        </>
    )
}