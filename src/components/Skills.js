import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="py-12" ref={skillsRef}>
      <div className="container mx-auto flex flex-col md:flex-row p-4 gap-8">

        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h4 className="text-2xl text-blue-500 text-left">My Qualities</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 text-left">My Top Skills</h1>
          <p className="text-gray-700 pt-4 dark:text-gray-300 text-sm sm:text-base text-left">
          I specialize in crafting innovative and scalable digital solutions, combining creativity 
            and technical expertise to deliver exceptional user experiences with cutting-edge technology. 
            My expertise spans web development, UI/UX design, graphic design, and mobile app development, 
            ensuring seamless user experiences across platforms. With a deep understanding of modern 
            frameworks like React.js, Next.js, and Tailwind CSS, I build responsive and high-performance 
            websites. Additionally, I have a keen eye for design, leveraging tools like Figma, Adobe 
            Photoshop, and Illustrator to create visually compelling graphics. My skills also extend 
            to API development, database management, and optimization, allowing me to develop full-stack 
            applications that are both efficient and user-centric. I am committed to continuous learning, 
            staying updated with industry trends, and delivering top-tier solutions that align with business 
            goals.
          </p>
          <div className="mt-6 text-left">
            <motion.button
              onClick={() => scrollToSection("services")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-12 py-2 sm:py-3 bg-white text-blue-500 font-bold rounded-xl shadow-lg 
                hover:text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-500 transition-all text-sm sm:text-base"
            >
              Services
            </motion.button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center border-[1px] border-blue-500 rounded-lg p-4">
          {[
            {
              title: "Frontend", skills: [
                { name: "React Js", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "Next Js", img: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg" },
                { name: "HTML", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" }
              ]
            },
            {
              title: "Backend", skills: [
                { name: "Node Js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                { name: "Express Js", img: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
                { name: "Django", img: "https://img.icons8.com/?size=100&id=LPmcJ9e0FU7K&format=png&color=000000" }
              ]
            },
            {
              title: "Databases", skills: [
                { name: "MongoDB", img: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
                { name: "Firebase", img: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000" },
                { name: "MySQL", img: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" }
              ]
            },
            {
              title: "Design Tools", skills: [
                { name: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
                { name: "Adobe Ai", img: "https://img.icons8.com/?size=100&id=118571&format=png&color=000000" },
                { name: "Webflow", img: "https://img.icons8.com/?size=100&id=ktrJ12qa5f65&format=png&color=000000" }
              ]
            },
            {
              title: "Hosting", skills: [
                { name: "Netlify", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg" },
                { name: "Hostinger", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "AWS", img: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" }
              ]
            },
            {
              title: "Others", skills: [
                { name: "Git", img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
                { name: "React Js", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "React Js", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }
              ]
            }
          ].map((category, index) => (
            <div key={index} className="text-center">
              <h4 className="text-blue-500 text-xl">{category.title}</h4>
              <div className="w-full flex flex-wrap justify-center gap-4 mt-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="w-20 h-20 flex flex-col items-center p-2 border-2 border-blue-500 rounded-lg">
                    <img src={skill.img} className="w-10 h-10 object-contain" alt={skill.name} />
                    <p className="dark:text-gray-300 text-gray-700 text-xs mt-1">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
