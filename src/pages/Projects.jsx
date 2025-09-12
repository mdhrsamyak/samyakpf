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
                  className="w-full h-[290px] object-contain"
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
    name: "Hritisha Portfolio",
    link: "https://hritishapf.vercel.app/",
    image: "./project2.png",
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
        name: "TailwindCSS",
        logo: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 9.96925C7.66667 7.26058 9.33333 5.90625 12 5.90625C16 5.90625 16.5 8.95325 18.5 9.46125C19.8333 9.79992 21 9.29192 22 7.93725C21.3333 10.6459 19.6667 12.0002 17 12.0002C13 12.0002 12.5 8.95325 10.5 8.44525C9.16667 8.10725 8 8.61558 7 9.97025M2 16.0642C2.66667 13.3549 4.33333 12.0002 7 12.0002C11 12.0002 11.5 15.0473 13.5 15.5553C14.8333 15.8933 16 15.3852 17 14.0312C16.3333 16.7399 14.6667 18.0942 12 18.0942C8 18.0942 7.5 15.0472 5.5 14.5392C4.16667 14.2006 3 14.7096 2 16.0642Z"
              fill="black"
            />
          </svg>
        ),
      },
      {
        name: "ReactJS",
        logo: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.448 16.2403C13.9123 17.0015 13.3288 17.7279 12.701 18.4153C14.374 20.0383 15.929 20.7983 16.792 20.2993C17.655 19.8013 17.774 18.0743 17.205 15.8153C16.352 16.0053 15.426 16.1503 14.448 16.2403ZM13.138 16.3263C12.38 16.3571 11.621 16.3571 10.863 16.3263C11.239 16.8183 11.621 17.2743 12 17.6893C12.3807 17.2739 12.76 16.8203 13.138 16.3263ZM18.178 8.43125C20.843 9.19525 22.584 10.4653 22.584 11.9983C22.584 13.5313 20.844 14.8013 18.179 15.5653C18.849 18.2553 18.619 20.3973 17.292 21.1633C15.965 21.9303 13.995 21.0583 12 19.1323C10.006 21.0573 8.03599 21.9303 6.70899 21.1633C5.38199 20.3963 5.15199 18.2553 5.82199 15.5653C3.15699 14.8033 1.41699 13.5333 1.41699 12.0003C1.41699 10.4673 3.15699 9.19725 5.82199 8.43325C5.15199 5.74325 5.38199 3.60125 6.70899 2.83425C8.03599 2.06825 10.006 2.94025 12 4.86625C13.995 2.94025 15.965 2.06825 17.292 2.83425C18.619 3.60125 18.849 5.74325 18.179 8.43325M17.206 8.18525C17.776 5.92525 17.656 4.19925 16.793 3.70025C15.93 3.20225 14.375 3.96225 12.703 5.58525C13.3304 6.27259 13.9136 6.99905 14.449 7.76025C15.427 7.85025 16.353 7.99425 17.206 8.18525ZM6.79599 15.8153C6.22699 18.0753 6.34599 19.8013 7.20999 20.2993C8.07299 20.7973 9.62799 20.0383 11.3 18.4153C10.6725 17.7276 10.0894 17.0008 9.55399 16.2393C8.62693 16.1561 7.70608 16.0141 6.79699 15.8143M10.865 7.67225C11.623 7.64143 12.382 7.64143 13.14 7.67225C12.7794 7.20238 12.399 6.74797 12 6.31025C11.62 6.72692 11.241 7.18159 10.863 7.67425M9.55299 7.76125C10.0884 7.00005 10.6716 6.27359 11.299 5.58625C9.62699 3.96225 8.07199 3.20225 7.20999 3.70025C6.34699 4.19925 6.22699 5.92625 6.79699 8.18525C7.64999 7.99525 8.57599 7.85125 9.55399 7.76025M13.894 15.2803C14.6061 14.2356 15.2392 13.1392 15.788 12.0003C15.2395 10.8613 14.6067 9.76496 13.895 8.72025C12.6344 8.62602 11.3686 8.62602 10.108 8.72025C9.39556 9.7649 8.76214 10.8613 8.21299 12.0003C8.76182 13.1392 9.39491 14.2356 10.107 15.2803C11.3676 15.3745 12.6334 15.3745 13.894 15.2803ZM15.179 15.1483C15.795 15.0683 16.3783 14.9673 16.929 14.8453C16.7486 14.2812 16.5444 13.725 16.317 13.1783C15.9648 13.8501 15.5855 14.5073 15.18 15.1483M8.82299 8.85125C8.20699 8.93192 7.62366 9.03325 7.07299 9.15525C7.24299 9.69259 7.44733 10.2483 7.68599 10.8223C8.03815 10.1505 8.41747 9.49325 8.82299 8.85225M7.07299 14.8463C7.62366 14.9676 8.20699 15.0686 8.82299 15.1493C8.41747 14.5083 8.03815 13.851 7.68599 13.1793C7.45824 13.726 7.25373 14.2822 7.07299 14.8463ZM6.09499 14.6013C6.35699 13.7673 6.69499 12.8933 7.10499 12.0013C6.71367 11.1568 6.37632 10.2884 6.09499 9.40125C3.85399 10.0373 2.41799 11.0053 2.41799 12.0013C2.41799 12.9973 3.85399 13.9643 6.09499 14.6013ZM16.93 9.15525C16.3787 9.03325 15.7953 8.93192 15.18 8.85125C15.5855 9.49225 15.9648 10.1495 16.317 10.8213C16.555 10.2479 16.7593 9.69259 16.93 9.15525ZM17.907 9.40025C17.647 10.2343 17.307 11.1083 16.897 12.0003C17.307 12.8923 17.647 13.7663 17.907 14.6003C20.149 13.9633 21.585 12.9963 21.585 12.0003C21.585 11.0043 20.149 10.0373 17.907 9.40025ZM12 13.8793C11.7481 13.8875 11.4971 13.845 11.2619 13.7542C11.0268 13.6635 10.8123 13.5264 10.6312 13.3511C10.4501 13.1758 10.3061 12.9659 10.2077 12.7338C10.1094 12.5018 10.0587 12.2523 10.0587 12.0003C10.0587 11.7482 10.1094 11.4987 10.2077 11.2667C10.3061 11.0346 10.4501 10.8247 10.6312 10.6494C10.8123 10.4741 11.0268 10.337 11.2619 10.2463C11.4971 10.1556 11.7481 10.113 12 10.1213C12.4877 10.1372 12.9502 10.3421 13.2895 10.6927C13.6289 11.0434 13.8187 11.5123 13.8187 12.0003C13.8187 12.4882 13.6289 12.9571 13.2895 13.3078C12.9502 13.6584 12.4877 13.8633 12 13.8793Z"
              fill="black"
            />
          </svg>
        ),
      },
      {
        name: "Framer Motion",
        logo: (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.83545 0H13.3671V5.33337H8.1012L2.83545 0ZM2.83545 5.33337H8.1012L13.3671 10.6666H8.1012V16L2.83545 10.6666V5.33337Z"
              fill="black"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Project 3",
    link: "#",
    image: "./photo3.jpg",
  },
];

export default Projects;
