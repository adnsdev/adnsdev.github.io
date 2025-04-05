import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='text-4xl sm:text-5xl text-blue-500 font-bold text-center'>Contact</h1>
      <div className='flex justify-center mt-10'>
        <form
          ref={formRef}
          method="POST"
          encType="multipart/form-data"
          action="https://formsubmit.co/bagwanadnanr09876@gmail.com"
          className='w-full flex flex-col gap-6 max-w-3xl mx-auto'
        >
          <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
          {/* Name & Email */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-blue-500 text-lg' htmlFor="name">Name :</label>
              <input required className='text-gray-700 dark:bg-gray-800 dark:text-gray-300 w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md' type="text" id='name' name='name' placeholder='Enter your name' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-blue-500 text-lg' htmlFor="email">Email :</label>
              <input required className='text-gray-700 dark:bg-gray-800 dark:text-gray-300 w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md' type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
          </div>

          {/* Phone & Subject */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-blue-500 text-lg' htmlFor="phoneno">Phone No :</label>
              <input required className='text-gray-700 dark:bg-gray-800 dark:text-gray-300 w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md' type="text" id='phoneno' name='phoneno' placeholder='Enter your phone number' />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-blue-500 text-lg' htmlFor="subject">Subject :</label>
              <input required className='text-gray-700 dark:bg-gray-800 dark:text-gray-300 w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md' type="text" id='subject' name='subject' placeholder='Enter your subject' />
            </div>
          </div>

          {/* File Upload */}
          <div className='flex flex-col gap-2'>
            <label className='text-blue-500 text-lg' htmlFor="sendfile">Send File :</label>
            <input type="file" id="sendfile" name='sendfile' className="file:bg-gray-600 file:text-gray-200 file:rounded-lg file:border-none file:cursor-pointer text-gray-700 dark:bg-gray-800 dark:text-gray-300 w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md bg-white" />
          </div>

          {/* Message */}
          <div className='flex flex-col gap-2'>
            <label className='text-blue-500 text-lg' htmlFor="message">Message :</label>
            <textarea className='text-gray-700 dark:bg-gray-800 dark:text-gray-300 h-[120px] w-full focus:outline-none border-2 border-blue-500 p-2 rounded-md' name="message" id="message" placeholder='Enter your message'></textarea>
          </div>

          {/* Submit Button */}
          <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl px-4 py-2 w-full max-w-sm mx-auto rounded-md'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
