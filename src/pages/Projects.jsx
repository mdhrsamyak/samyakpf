import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const controls = useAnimation();
  const circleRef = useRef(null);
  const imageSliderRef = useRef(null);
  const hoveredIndex = useRef(0);

  const imageHeight = 310;
  const imageGap = 0;
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
                  >
                    <div className="text-6xl md:text-8xl font-extrabold group-hover:text-gray-400 group-hover:translate-x-[-10px] transition-all duration-150">
                      {project.name}
                    </div>
                    <div className="md:hidden flex w-[350px] h-[400px] px-5 py-10 bg-slate-400">
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
          className="fixed top-0 left-0 w-[350px] h-[400px] overflow-hidden px-5 py-20 bg-slate-400 z-[1000] pointer-events-none opacity-0 scale-[0.1] cursor-pointer"
        >
          <div
            ref={imageSliderRef}
            className="w-full h-full relative flex flex-col gap-[120px]"
          >
            {projectsList.map((project, idx) => (
              <div className="w-full h-100">
                <img
                  key={idx}
                  src={project.image}
                  className="w-full h-full object-cover"
                  alt={`preview-${idx}`}
                />
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
    name: "Project 1",
    link: "#",
    image: "./photo1.jpg",
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
