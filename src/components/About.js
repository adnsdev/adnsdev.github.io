import React from "react";
import imgab from "../assets/images/online-job-interview-concept.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Image Animation
    gsap.fromTo(
      imageRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Text Animation
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-[550px] flex items-center justify-center">
      <div className="container flex flex-wrap mx-auto p-4">
        {/* Image Div */}
        <div
          className="w-full sm:w-1/2 flex justify-center sm:order-1"
          ref={imageRef}
        >
          <img
            src={imgab}
            alt="coding"
            className="w-[90%] max-w-[500px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] h-auto sm:h-[400px] mt-[-20px]"
          />
        </div>

        {/* Text Div */}
        <div
          className="w-full sm:w-1/2 flex flex-col p-4 pt-10 sm:pt-5 sm:order-2"
          ref={textRef}
        >
          <h4 className="text-xl text-blue-500">Who I am</h4>
          <h1 className="text-4xl sm:text-5xl text-blue-500 font-bold">
            About Me
          </h1>
          <p className="mt-2 sm:mt-4 dark:text-gray-300 text-gray-700">
            I am a passionate and results-driven web developer and designer with a keen eye for
            detail and a deep understanding of modern digital trends. With expertise in front-end
            and back-end technologies, I create high-performance websites, intuitive UI/UX designs,
            and scalable applications tailored to business needs. My approach is driven by
            innovation, efficiency, and a user-first mindset, ensuring that every project I work on
            delivers seamless functionality and aesthetic appeal. Whether it's building dynamic web
            applications, designing engaging interfaces, or optimizing digital experiences, I am
            always eager to take on new challenges and push creative boundaries.
          </p>
          <div className="mt-6 sm:mt-8">
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-9 sm:px-12 py-2 sm:py-3 bg-white text-blue-500 font-bold rounded-xl shadow-lg 
              hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 transition-all 
              text-sm sm:text-base"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
