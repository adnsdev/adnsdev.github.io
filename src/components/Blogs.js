import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/images/Api.jpg';
import img2 from '../assets/images/Ai.jpg';
import img3 from '../assets/images/ML.jpg';
import img4 from '../assets/images/AiAgents.jpg';
import img5 from '../assets/images/UiUx.jpg';
import img6 from '../assets/images/Mapp.jpg';

gsap.registerPlugin(ScrollTrigger);

function Blogs() {
  const blogRefs = useRef([]);

  useEffect(() => {
    blogRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });
  }, []);

  const blogs = [
    {
      title: "What Is API's",
      desc: "An API (Application Programming Interface) allows different software applications to communicate. It acts as a bridge, enabling data exchange between systems. APIs power web apps, mobile apps, and cloud services, making modern technology seamless and interconnected.",
      img: img1
    },
    {
      title: "Artificial Intellegence",
      desc: "Artificial Intelligence (AI) enables machines to think, learn, and solve problems like humans. It powers chatbots, self-driving cars, and recommendation systems. AI uses machine learning, deep learning, and neural networks to improve efficiency, automate tasks, and transform industries worldwide.",
      img: img2
    },
    {
      title: "Machine Learning",
      desc: "Machine Learning (ML) is a branch of AI that enables computers to learn from data without explicit programming. It powers recommendations, fraud detection, and self-driving cars. ML improves over time, making predictions and automating complex tasks efficiently in various industries",
      img: img3
    },
    {
      title: "AI Agents",
      desc: "AI agents are software programs that perceive their environment, process data, and take actions to achieve goals. They use machine learning, deep learning, and NLP to automate tasks, assist users, and optimize decision-making in industries like healthcare, finance, and robotics",
      img: img4
    },
    {
      title: "Ui/Ux Designing",
      desc: "UI/UX designing focuses on enhancing user experience and interface. UI (User Interface) deals with visuals, while UX (User Experience) ensures smooth usability. A well-designed UI/UX improves engagement, accessibility, and satisfaction, making digital products more user-friendly and efficient.",
      img: img5
    },
    {
      title: "Mobile Application",
      desc: "Mobile app development involves creating software applications for smartphones and tablets. It includes UI/UX design, coding, and testing. Apps can be native (Android/iOS), web-based, or hybrid. Mobile apps enhance productivity, entertainment, and business growth, making digital experiences. ",
      img: img6
    }
  ];

  return (
    <div className='w-full max-w-[1200px] mx-auto px-4 py-16'>
      <h4 className='text-2xl text-blue-500 text-left'>My Blogs</h4>
      <h1 className='text-4xl sm:text-5xl font-bold text-blue-500 text-left'>Read Latest Blogs Here!</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            ref={el => blogRefs.current[index] = el}
            className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg'
          >
            <img src={blog.img} alt="img" className='w-full h-[200px] object-cover rounded-md' />
            <div>
              <h3 className='text-lg font-semibold text-blue-500'>{blog.title}</h3>
              <p className='text-gray-700 dark:text-gray-300'>{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
