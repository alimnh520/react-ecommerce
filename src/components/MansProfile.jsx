import { ContactIcons } from './ContactIcons';
export const MansProfile = ({ image, about, name, mode }) => {
    const aboutMe = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem ."

    return (
        <div className={`h-64 sm:h-96 flex sm:flex-col items-start justify-between shadow-[0_0_10px_rgba(0,0,0,0.2)] text-gray-600 rounded-md overflow-hidden ${mode && "bg-gray-600 text-white"}`}>
            <div className="h-full sm:h-1/2 w-4/5 sm:w-full mr-4 relative flex items-center justify-center bg-indigo-700 before:absolute before:content-[''] before:h-full before:scale-150 before:w-full before:rounded-full before:bg-violet-400 before:transition-all before:duration-300 before:left-48 before:-top-56 hover:before:left-20 hover:before:-top-1/3 overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover absolute sm:px-20" />
                <ContactIcons />
            </div>
            <div className="mt-5 sm:h-1/2 sm:px-5 sm:py-3">
                <p className="text-3xl font-semibold">{name}</p>
                <p className={`text-violet-900 mt-1 ${mode && "text-blue-400"}`}>{about}</p>
                <p className="text-lg font-semibold">{aboutMe}</p>
            </div>
        </div>
    )
}