import React, { useEffect, useRef } from "react";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaDesktop, FaLayerGroup, FaGlobe } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: <FaLaptopCode className="text-blue-600 text-5xl" />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creative and eye-catching designs for branding and marketing.",
    icon: <FaPaintBrush className="text-red-600 text-5xl" />,
  },
  {
    id: 3,
    title: "App Development",
    description: "Mobile applications for Android and iOS with a seamless user experience.",
    icon: <FaMobileAlt className="text-green-600 text-5xl" />,
  },
  {
    id: 4,
    title: "Web Design",
    description: "Modern and responsive web designs for a great user experience.",
    icon: <FaDesktop className="text-purple-600 text-5xl" />,
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-friendly and intuitive UI/UX designs for better engagement.",
    icon: <FaLayerGroup className="text-yellow-600 text-5xl" />,
  },
  {
    id: 6,
    title: "Web Apps",
    description: "Scalable and efficient web applications tailored to business needs.",
    icon: <FaGlobe className="text-orange-600 text-5xl" />,
  },
];

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    price: "$49/month",
    features: ["Basic website", "Standard support", "SEO optimization"],
  },
  {
    id: 2,
    title: "Standard",
    price: "$99/month",
    features: ["Advanced website", "Priority support", "SEO & Analytics"],
  },
  {
    id: 3,
    title: "Premium",
    price: "$199/month",
    features: ["Custom website", "24/7 support", "SEO, Analytics & Marketing"],
  },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  const serviceRefs = useRef([]);
  const pricingRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
            },
            delay: index * 0.1,
          }
        );
      }
    });

    pricingRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 85%",
            },
            delay: index * 0.15,
          }
        );
      }
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mb-8">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="bg-white shadow-lg p-8 rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-700 mt-3 text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-500 mt-16 mb-8">
        Pricing Plans
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            ref={(el) => (pricingRefs.current[index] = el)}
            className="bg-white shadow-lg p-8 rounded-xl text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <h3 className="text-3xl font-semibold text-blue-500">{plan.title}</h3>
            <p className="text-2xl font-bold text-gray-800 my-4">{plan.price}</p>
            <ul className="text-gray-700 text-lg">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mt-3">✔ {feature}</li>
              ))}
            </ul>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-700"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
