import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/images/MylatestProject.jpeg';
import img2 from '../assets/images/MylatestProjec.jpeg';
import img3 from '../assets/images/Gamming.jpeg';
import img4 from '../assets/images/Portfolio.jpeg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A modern and responsive e-commerce website built with React.js and Tailwind CSS.',
    image: img1,
  },
  {
    id: 2,
    title: 'Fashion Store Website',
    description: 'A sleek and professional design for fashion store businesse to increase conversions.',
    image: img2,
  },
  {
    id: 3,
    title: 'Gaming Website',
    description: 'A gaming tournament platform for organizing and managing gaming events.',
    image: img3,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase skills and projects with animations and transitions.',
    image: img4,
  },
];

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1, // Stagger-like effect
          }
        );
      }
    });
  }, []);

  return (
    <div className='container mx-auto px-4 py-16'>
      <h4 className='text-2xl text-blue-500 text-center'>My Projects</h4>
      <h1 className='text-4xl sm:text-5xl text-blue-500 font-bold text-center mb-12'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300'
          >
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' loading="lazy" />
            <div className='p-4'>
              <h2 className='text-xl font-bold text-blue-500'>{project.title}</h2>
              <p className='text-gray-600 dark:text-gray-300 mt-2'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
