import { useId } from 'react';
import { Form } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";
import { ContactMap } from './ContactMap';
import { CustomContext } from './../layout/CustomContext';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export const Contact = () => {
    const openMode = CustomContext();
    const userName = useId();
    const userMail = useId();
    const subject = useId();
    const message = useId();

    useEffect(() => {
        AOS.init({duration: 1000});
    },[])
    return (
        <div className={`w-full h-screen md:h-auto sm:h-auto py-16 px-20 sm:p-5 md:p-10 flex md:flex-col sm:flex-col items-center justify-center ${openMode ? "bg-gray-700 text-white" : "text-gray-800"}`} data-aos="zoom-out">
            <Form action="/contact" method="POST" className='w-1/2 md:w-full md:h-1/2 sm:w-full h-full sm:h-1/2 flex flex-col px-10 sm:px-5 sm:gap-y-4 md:gap-y-4'>
                <p className={`text-center text-2xl font-semibold ${openMode ? "text-white" : "text-gray-700"} mb-3 relative before:absolute before:content-[""] before:h-0.5 before:w-20 before:bg-yellow-400 before:-bottom-3 before:left-1/2 before:-translate-x-1/2`}>Contact Us</p>
                <div className="flex md:gap-x-5 sm:flex-col sm:w-full h-1/4 items-center justify-between">
                    <div className="flex sm:w-full flex-col md:w-1/2">
                        <label htmlFor={userName} className='font-medium'>Your Name</label>
                        <input type="text" name="username" id={userName} className={`outline-none border px-4 text-lg rounded-lg border-gray-200 ${openMode && "bg-gray-400"} h-12 focus:border-blue-800 transition-all duration-500`} />
                    </div>
                    <div className="flex sm:w-full flex-col md:w-1/2">
                        <label htmlFor={userMail} className='font-medium'>Your Email</label>
                        <input type="text" name="email" id={userMail} className={`outline-none border px-4 text-lg rounded-lg border-gray-200 ${openMode && "bg-gray-400"} h-12 focus:border-blue-800 transition-all duration-500`} />
                    </div>
                </div>
                <div className="flex flex-col h-1/4">
                    <label htmlFor={subject} className='font-medium'>Subject</label>
                    <input type="text" name="subject" id={subject} className={`outline-none border px-4 text-lg rounded-lg border-gray-200 ${openMode && "bg-gray-400"} h-12 focus:border-blue-800 transition-all duration-500`} />
                </div>
                <div className="h-2/4 flex flex-col">
                    <label htmlFor={message} className='font-medium'>Message</label>
                    <textarea name="message" id={message} className={`outline-none border px-4 text-lg rounded-lg border-gray-200 ${openMode && "bg-gray-400"} focus:border-blue-800 transition-all duration-500 h-full md:h-36 sm:h-36`}></textarea>
                </div>
                <button className={` ${openMode ? 'bg-violet-500' : "bg-violet-900"} flex gap-x-1 items-center justify-center text-white py-3 text-lg rounded-md mt-5 w-5/12 sm:w-8/12 relative left-1/2 -translate-x-1/2`} type='submit'><IoIosSend className='text-2xl' /> Send Message</button>
            </Form>
            <ContactMap mode={openMode}/>
        </div>
    )
}