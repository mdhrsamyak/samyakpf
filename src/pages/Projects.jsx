import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const controls = useAnimation();
  const circleRef = useRef(null);
  const imageSliderRef = useRef(null);
  const hoveredIndex = useRef(0);

  const imageHeight = 290;
  const imageGap = 120;
  const fullSlideHeight = imageHeight + imageGap;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          });
        } else {
          controls.start({
            x: -200,
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          });
        }
      },
      {
        threshold: 0.5, // Adjust if needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  const handleMouseEnter = (index) => {
    hoveredIndex.current = index;

    gsap.to(circleRef.current, {
      scale: 1,
      autoAlpha: 1,
      duration: 0.4,
    });

    gsap.to(imageSliderRef.current, {
      y: -index * fullSlideHeight,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, {
      scale: 0.1,
      autoAlpha: 0,
      duration: 0.4,
    });
  };

  const handleMouseMove = (e) => {
    const offsetX = 175;
    const offsetY = 200;

    const visualCompensationY = hoveredIndex.current * fullSlideHeight;

    gsap.to(circleRef.current, {
      x: e.clientX - 180,
      y: e.clientY - 220,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <>
      <div
        className="flex min-h-screen"
        onMouseMove={handleMouseMove}
        id="project"
      >
        <div className="flex-1 bg-black text-white py-[10vh]">
          <div className="flex flex-col md:px-36 px-5 h-full">
            <motion.div
              ref={ref}
              initial={{ x: -200, opacity: 0 }}
              animate={controls}
              className="text-4xl font-bold text-zinc-600"
            >
              recent works
            </motion.div>
            <div className="mt-25 h-full border-t border-b border-white">
              {projectsList.map((project, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col  md:flex-row group justify-between items-center gap-7 md:gap-0 md:px-20 py-5 md:py-0 md:h-[305px] border-b border-white cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => (window.location.href = project.link)}
                  >
                    <div className="text-6xl md:text-8xl font-extrabold group-hover:text-gray-400 group-hover:translate-x-[-10px] transition-all duration-150">
                      {project.name}
                    </div>
                    <div className="md:hidden flex w-[350px] h-[400px] px-5 py-10 bg-slate-200">
                      <div className="w-full h-full">
                        <img
                          src={project.image}
                          className="w-full h-full object-cover"
                          alt={`preview-${index}`}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={circleRef}
          className="fixed top-0 left-0 w-[350px] h-[400px] overflow-hidden px-5 py-10 bg-slate-200 z-[1000] pointer-events-none opacity-0 scale-[0.1] cursor-pointer"
        >
          <div
            ref={imageSliderRef}
            className="w-full h-full relative flex flex-col gap-[120px]"
          >
            {projectsList.map((project, idx) => (
              <div className="w-full h-[290px]">
                <img
                  key={idx}
                  src={project.image}
                  className="w-full h-[290px] object-cover"
                  alt={`preview-${idx}`}
                />
                <div className="flex gap-2 mt-3 items-center justify-around">
                  {project?.tools?.map((tool, idx) => (
                    <div className="flex flex-col gap-1 items-center" key={idx}>
                      {tool.logo}
                      <div className="text-black font-extrabold text-sm">
                        {tool.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const projectsList = [
  {
    name: "Prativa Tour & Travels",
    link: "https://prativa-tour-and-travels.syvar.com.np/",
    image: "./project1.png",
    tools: [
      {
        name: "HTML",
        logo: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2L4.578 19.824L12 22L19.467 19.825L21 2H3ZM17.049 8.048H9.075L9.247 10.064H16.944L16.318 16.629L12.072 18.01L7.791 16.555L7.503 13.623H9.527L9.687 15.034L12.087 15.849L14.433 15.086L14.73 12.081H7.416L6.854 6.031H17.266L17.049 8.048Z"
              fill="black"
            />
          </svg>
        ),
      },
      {
        name: "CSS",
        logo: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2L4.578 19.834L12 22L19.468 19.835L21 2H3ZM16.3 16.722L12.007 17.926H12L7.703 16.722L7.406 13.555H9.514L9.664 15.081L11.999 15.72L14.339 15.08L14.584 12.03H7.314L7.127 10.024H14.767L14.941 8.018H6.924L6.748 6.012H17.254L16.3 16.722Z"
              fill="black"
            />
          </svg>
        ),
      },
      {
        name: "Next JS",
        logo: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM16 8H14.65V12H16V8ZM9.346 9.71L15.405 17.538L16.459 16.729L9.683 8H8V15.997H9.346V9.71Z"
              fill="black"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Project 2",
    link: "#",
    image: "./photo2.jpg",
  },
  {
    name: "Project 3",
    link: "#",
    image: "./photo3.jpg",
  },
];

export default Projects;
