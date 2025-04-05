import React from "react";

const logos = [
  {
    name: "React",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1bxid64Mup7aczewSAYMX&t=1714556221292",
  },
  {
    name: "JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg",
  },
  {
    name: "HTML",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Python",
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Node.js",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express.js",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "MongoDB",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    name: "Netlify",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg",
  },
  {
    name: "Firebase",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
  },
  {
    name: "Figma",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-8 bg-[#E6F1FF] dark:bg-[#0A192F]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-2 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    alt={logo.name}
                    title={logo.name}
                    className="h-8 sm:h-10 w-20 sm:w-28 px-2 object-contain transition-transform duration-300 hover:scale-110"
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
