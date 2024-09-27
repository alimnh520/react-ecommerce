export const SliderCard = ({ img, profileName, reviewText,}) => {

    return (
        <div className="flex flex-col h-full w-full p-12 sm:p-0 sm:mt-5">
            <div className="h-2/3 flex p-4 relative bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                <img src="/blockquote.svg" alt="" className="h-7 mr-3" />
                <div className="flex h-full flex-col">
                    <p className="h-2/3 text-xl my-3 text-gray-700 line-clamp-4 z-20">{reviewText}</p>
                    <div className="flex mt-5">
                        <img src="/rating.avif" alt="" className="w-6 mx-0.5" />
                        <img src="/rating.avif" alt="" className="w-6 mx-0.5" />
                        <img src="/rating.avif" alt="" className="w-6 mx-0.5" />
                        <img src="/rating.avif" alt="" className="w-6 mx-0.5" />
                    </div>
                </div>
                <div className="review w-9 h-12 absolute -bottom-9 sm:-bottom-11 left-16 bg-white "></div>
            </div>
            <div className="flex mt-12 px-10">
                <img src={img} alt="" className="h-16 rounded-full" />
                <div className="flex flex-col mt-2 px-5">
                    <p className="text-gray- line-clamp-3 font-black">{profileName.name}</p>
                    <p className="text-sm text-gray-700">{profileName.rate}</p>
                </div>
            </div>
        </div>
    )
}