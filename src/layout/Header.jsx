import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { SmallNavbar } from './SmallNavbar';
import { FaCartPlus } from "react-icons/fa";
export const Header = () => {
    const [scroll, setScroll] = useState(0);
    const [divMove, setDivMove] = useState(0);
    const [navClick, setNavClick] = useState(false);

    const isNavActive = () => {
        setNavClick(!navClick);
    }
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScroll(window.scrollY / 100);
        });
    }, []);
    console.log(scroll);

    const updateMove = (e) => {
        setDivMove(e.target);
    }
    const move = {
        left: `${divMove.offsetLeft}px`,
        width: `${divMove.clientWidth}px`
    }
    const isActive = ({ isActive }) => {
        return {
            color: isActive && "#facc15 ",
        }
    }

    return (
        <div className={`w-full md:px-5 px-20 h-8 sm:h-11 sm:border-b z-50 transition-all duration-500 overflow-hidden ${navClick && "sm:h-72"} flex sm:flex-col items-center sm:items-start justify-between fixed text-black bg-gray-700 sm:px-9 transition duration-500 z-50 top-0 sm:shadow-none shadow-[0_0_2px_2px_rgb(29,78,216)] scroll-smooth ${scroll > 0 && 'h-[48px] sm:top-0 backdrop-blur-xl z-50'}`}>
            <SmallNavbar isNavActive={isNavActive} navClick={navClick} />
            <p className='text-white font-bold text-2xl relative'>logo</p>
            <div className="w-full h-px bg-white hidden sm:block mt-3"></div>
            <div className={`relative sm:w-full py-1 flex sm:flex-col items-center sm:items-start justify-between md:gap-x-3 gap-x-10 sm:mt-1 sm:mb-2 sm:gap-x-0 transition-all duration-500 ${scroll > 0 && "py-1.5"}`}>
                <div className={`h-2/3 mt-2.5 ${scroll > 0 && "h-5/6 mt-[16px]"} sm:hidden w-20 before:absolute before:content-[''] before:h-5 before:w-5 before:bg-transparent before:shadow-[-2px_-2px_2px_rgb(55,65,81)] before:rounded-tl-lg after:absolute after:right-0 after:content-[''] after:h-5 after:w-5 after:bg-transparent after:shadow-[2px_-2px_2px_rgb(55,65,81)] after:rounded-tr-lg left-0 bg-blue-700 absolute transition-all duration-500`} style={move}>
                    <div className="absolute bottom-1 -left-5 h-5 w-5 rounded-br-lg shadow-[5px_5px_5px_rgb(29,78,216)] bg-gray-700"></div>
                    <div className="absolute -right-5 bottom-1 h-5 w-5 rounded-bl-lg shadow-[-5px_5px_5px_rgb(29,78,216)] bg-gray-700"></div>
                </div>
                <NavLink to="/" className={`relative px-4 sm:px-0 sm:py-0.5 text-white font-medium sm:before:absolute sm:before:w-0 sm:before:h-[3px] sm:before:hover:bg-yellow-400 sm:before:bottom-px sm:before:duration-500 sm:before:hover:w-full sm:-translate-x-28 transition-all ${navClick && "sm:translate-x-0 delay-200"}`} style={isActive} onClick={(e) => updateMove(e)}>Home</NavLink>

                <NavLink to="/about" className={`relative px-4 sm:px-0 sm:py-0.5 text-white font-medium sm:before:absolute sm:before:w-0 sm:before:h-[3px] sm:before:hover:bg-yellow-400 sm:before:bottom-px sm:before:duration-500 sm:before:hover:w-full sm:-translate-x-28 transition-all ${navClick && "sm:translate-x-0 delay-300"}`} style={isActive} onClick={(e) => updateMove(e)}>About</NavLink>

                <NavLink to="/services" className={`relative px-4 sm:px-0 sm:py-0.5 text-white font-medium sm:before:absolute sm:before:w-0 sm:before:h-[3px] sm:before:hover:bg-yellow-400 sm:before:bottom-px sm:before:duration-500 sm:before:hover:w-full sm:-translate-x-28 transition-all ${navClick && "sm:translate-x-0 delay-500"}`} style={isActive} onClick={(e) => updateMove(e)}>Services</NavLink>

                <NavLink to="/contact" className={`relative px-4 sm:px-0 sm:py-0.5 text-white font-medium sm:before:absolute sm:before:w-0 sm:before:h-[3px] sm:before:hover:bg-yellow-400 sm:before:bottom-px sm:before:duration-500 sm:before:hover:w-full sm:-translate-x-28 transition-all ${navClick && "sm:translate-x-0 delay-700"}`} style={isActive} onClick={(e) => updateMove(e)}>Contact</NavLink>

                <NavLink to="/reviews" className={`relative px-4 sm:px-0 sm:py-0.5 text-white font-medium sm:before:absolute sm:before:w-0 sm:before:h-[3px] sm:before:hover:bg-yellow-400 sm:before:bottom-px sm:before:duration-500 sm:before:hover:w-full sm:-translate-x-28 transition-all ${navClick && "sm:translate-x-0 delay-1000"}`} style={isActive} onClick={(e) => updateMove(e)}>Reviews</NavLink>

                <p className='relative rounded-xl px-6 py-2 bg-yellow-400 flex items-center justify-center gap-x-2 text-sm font-medium cursor-pointer sm:w-full sm:py-2.5 sm:mt-2'><FaCartPlus className='text-lg' /> Buy Now</p>
            </div>
        </div>
    )
}