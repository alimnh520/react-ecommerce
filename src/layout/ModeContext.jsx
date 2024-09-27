import { createContext, useState } from "react";

export const ModeContext = createContext();
const ModeData = ({ children }) => {
    const [openMode, setOpenMode] = useState(false);

    const isOpenMode = () => {
        setOpenMode(!openMode);
    }
    return (
        <ModeContext.Provider value={openMode}>
            {children}
            <div className="size-10 cursor-pointer rounded-full z-50 fixed bottom-10 left-5 bg-white border">
                <img src={`${openMode ? "4808961-200.png" : "670445-200.png"}`} alt="" className="size-full object-cover object-center transition-all duration-500" onClick={isOpenMode} />
            </div>
        </ModeContext.Provider>
    )
}
export default ModeData