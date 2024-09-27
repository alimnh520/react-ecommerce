import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
export const ContactIcons = () => {
    return (
        <div className="w-9/12 absolute bottom-8 flex gap-x-4 items-center justify-center text-lg bg-white py-2.5">
            <FaTwitter className="text-blue-500 transition duration-300 hover:scale-150 cursor-pointer" />
            <IoLogoFacebook className="text-blue-600 transition duration-300 hover:scale-150 cursor-pointer" />
            <CiInstagram className="text-orange-600 transition duration-300 hover:scale-150 cursor-pointer" />
            <FaLinkedin className="text-blue-700 transition duration-300 hover:scale-150 cursor-pointer" />
        </div>
    )
}