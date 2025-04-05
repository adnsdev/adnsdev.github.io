import React from 'react'
import Banner from '../components/Banner'
import AnimatedLgo from '../components/AnimatedLgo'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'




function Home() {
  return (
    <div> {/* Prevents horizontal scrolling */}

      <section id='home' className="w-full h-full overflow-x-hidden sm:overflow-hidden bg-[#E6F1FF]  dark:bg-[#0A192F]">
        <Banner />
      </section>
      <section id='about' className="overflow-x-hidden sm:overflow-hidden  bg-[#E6F1FF]  dark:bg-[#0A192F]">
        <About />
        <Skills />
      </section>
      <section id='blogs' className="overflow-x-hidden sm:overflow-hidden bg-[#E6F1FF]  dark:bg-[#0A192F]">
         <Blogs />
      </section>
      <section id='projects' className="overflow-x-hidden sm:overflow-hidden bg-[#E6F1FF]  dark:bg-[#0A192F]">
         <Projects />
      </section>
      <section id='services' className="overflow-x-hidden sm:overflow-hidden bg-[#E6F1FF]  dark:bg-[#0A192F]">
         <Services />
        <AnimatedLgo />
      </section>
      <section id='contact' className="overflow-x-hidden sm:overflow-hidden bg-[#E6F1FF]  dark:bg-[#0A192F]">
         <Contact />
      </section>
      <section className="w-full h-full overflow-x-hidden sm:overflow-hidden  sm:px-6 py-8 md:py-8 bg-[#E6F1FF]  dark:bg-[#0A192F]"> {/* Responsive container */}
      </section>

    </div>
  )
}

export default Home