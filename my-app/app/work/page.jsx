'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Design and Development of a Website for MSG",
    description: "I created a website for MSG, an online store specializing in selling fish, vegetables, and fruits. The project includes both a front-end for customers and a back-end for administration, providing full management of the website's elements. Technologies used include ReactJS, Tailwind CSS, Node.js, Express.js, TypeScript, Prisma, and PostgreSQL. This project was designed to be user-friendly, visually appealing, and fully functional for both the store and the administration interface.",
    date: "2024-11-01", // Exemple de date de réalisation
    stack: [
      { name: "Reactjs" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "CSS 3" },
      { name: "Bootstrap" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
    ],
    image: '/assets/work/image1.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Projet 2",
    description: "fvgfgbfgb",
    date: "2024-10-15", // Exemple de date
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: '/assets/work/image.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Projet 3",
    description: "fvgfgbfgb",
    date: "2024-09-30", // Exemple de date
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: '/assets/work/image3.png',
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Projet 3",
    description: "fvgfgbfgb",
    date: "2024-09-30", // Exemple de date
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    image: '/assets/work/image4.png',
    live: "",
    github: "",
  },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }}} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[15px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>

              {/* project date */}
              <p className="text-white/60 text-xl">
                Date: {project.date}
              </p>

              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github Project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-colors"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;


