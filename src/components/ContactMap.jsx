export const ContactMap = ({mode}) => {
    return (
        <div className="w-1/2 sm:w-full md:w-full h-full sm:h-1/2 md:h-1/2 flex flex-col pr-5 md:mt-5">
            <p className={`text-center text-2xl font-semibold ${mode ? "text-white" : "text-gray-700"} mb-3 relative before:absolute before:content-[""] before:h-0.5 before:w-20 before:bg-yellow-400 before:-bottom-3 before:left-1/2 before:-translate-x-1/2`}>Our map</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14708.124425618525!2d89.53329422799357!3d22.838338628522983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb47152f%3A0xf04b212290718952!2sKhulna!5e0!3m2!1sen!2sbd!4v1727183348955!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-3/4 sm:h-80 md:h-96 mt-5"></iframe>
            <div className={`w-full flex gap-y-2 mt-3 flex-col ${mode ? "text-white" : "text-gray-700"}`}>
                <p className="text-base font-medium w-full">
                    <span className="text-lg font-bold"> Working Time:</span> Monday - Saturday: 09:00 AM - 08:00 PM
                </p>
                <p className="text-base font-medium w-full">
                    <span className="text-lg font-bold"> Phone Number:</span> +8801931039368
                </p>
                <p className="text-base font-medium w-full">
                    <span className="text-lg font-bold"> Email:</span> alimnh412@gmail.com
                </p>
            </div>
        </div>
    )
}