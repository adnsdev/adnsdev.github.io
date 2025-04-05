import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Img from '../assets/images/adn.PNG';
import { PiHexagonThin } from "react-icons/pi";
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const typedElement = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "A Professional Web Developer",
        "A Passionate Web Designer",
        "A Creative Ui/Ux Designer",
        "A Freelancer",
        "A Blogger",
        "A Graphic Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.to(imageRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Parallax effect
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      typed.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-[85vh] sm:h-[90vh] flex flex-col md:flex-row justify-between dark:text-[#E6F1FF] dark:bg-[#0A192F] text-slate-700 px-4 sm:px-6 md:px-10 py-16 bg-[#E6F1FF]"
    >
      <div className="container mx-auto px-0 sm:px-6 flex flex-col md:flex-row items-center justify-center">
        
        {/* Text Content */}
        <div
          ref={textRef}
          className='w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-center mt-16 md:mt-[120px] order-2 md:order-1'
        >
          {/* Letter-by-letter animated intro */}
          <p className="text-2xl sm:text-3xl md:text-4xl opacity-90">
            {"Hello, I'm Adnan Bagwan".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mt-2">
            Welcome to <span className='text-blue-500'>Adns-Dev</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl mt-2 font-bold overflow-hidden">
            I am <span ref={typedElement} className="text-blue-500 inline-block whitespace-nowrap max-w-full"></span>
          </h2>

          <p className="mt-4 text-sm sm:text-md opacity-90">
            Crafting seamless digital experiences with clean code and intuitive design.
            As a web developer and UI/UX designer, I build visually stunning and
            user-friendly websites that leave a lasting impact. Let's bring your ideas
            to life with creativity and functionality.
          </p>

          <div className='flex flex-row sm:flex-row sm:w-[600px] w-[350px] gap-4 mt-6'>
            <motion.button
              onClick={() => {
                window.open("https://drive.google.com/file/d/1jMOosXi0_S8_fMJL7HtlqTU95H1KGmVu/view?usp=sharing", "_blank");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-9 sm:px-12 py-2 sm:py-3 bg-white text-blue-500 font-bold rounded-xl shadow-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 transition-all text-sm sm:text-base"
            >
              Download CV
            </motion.button>

            <motion.button
              onClick={() => {
                window.open("https://github.com/adnsdev/adnsdev.git", "_blank");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-9 sm:px-12 py-2 sm:py-3 bg-white text-blue-500 font-bold rounded-xl shadow-lg hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 transition-all text-sm sm:text-base"
            >
              Visit Github
            </motion.button>
          </div>
        </div>

        {/* Image Content */}
        <div
          ref={imageRef}
          className="w-full md:w-1/2 mt-16 md:mt-[100px] flex justify-center items-center relative order-1 md:order-2"
        >
          <div className="absolute flex justify-center items-center animate-pulse">
            <PiHexagonThin className="h-[350px] w-[350px] sm:h-[350px] sm:w-[350px] md:h-[450px] md:w-[450px] text-blue-500 blur-sm animate-[spin_20s_linear_infinite]" />
          </div>
          <img
            src={Img}
            alt="Adnan Bagwan"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] z-10 rounded-full shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
