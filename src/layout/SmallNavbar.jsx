import { useState } from "react"

export const SmallNavbar = ({isNavActive, navClick}) => {

    return(
        <div className={`h-8 hidden mt-1.5 w-8 cursor-pointer absolute right-9 sm:flex flex-col items-center justify-between transition-all duration-500 ${navClick && "rotate-90"}`} onClick={isNavActive}>
            <div className={`h-1 w-full bg-white relative ${navClick && "rotate-45 top-3.5"}`}></div>
            <div className={`h-1 w-full bg-white relative ${navClick && "hidden"}`}></div>
            <div className={`h-1 w-full bg-white relative ${navClick && "-rotate-45 bottom-3.5"}`}></div>
        </div>
    )
}