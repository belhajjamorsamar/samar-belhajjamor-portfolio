'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub, BsPlayFill, BsPauseFill, BsVolumeMute, BsVolumeUp, BsFullscreen } from 'react-icons/bs';
import Link from 'next/link';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "Front End",
    title: "Design and Development of a Website for MSG",
    description: "I created a website for MSG, an online store specializing in selling fish, vegetables, and fruits. The project includes both a front-end for customers and a back-end for administration.",
    date: "2023-07",
    stack: [
      { name: "ReactJS" },
      { name: "Tailwind CSS" },
      { name: "Express.js" },
     
    ],
    video: "/assets/work/video1.mp4",
    github: "https://github.com/belhajjamorsamar/Sea-Gourmet",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Développement d'une application web d'aide au diagnostic avec IA",
    description: "This diagnostic assistance application includes a DICOM Viewer to display medical images and an interface for glaucoma detection, an eye disease, by analyzing fundus images using deep learning techniques. It enables healthcare professionals to quickly diagnose glaucoma from DICOM images. DICOM is a standard for storing and exchanging medical images, including clinical metadata.",
    date: "2023-01-02",
    stack: [
      { name: "React.js" },
      { name: "MatrielUi" },
      { name: "CSS3" },
      { name: "Axios" },
      { name: "Flask" },
      { name: "Python" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      {name:  "SQLiteStudio"},
    ],
    video: "/assets/work/PFE.mp4",
    github: "https://github.com/project2",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Molka Delivery",
    description: "Molka Delivery is a home delivery platform that connects users with couriers to facilitate sending and receiving parcels. Developed with Laravel, it offers a simple interface to place orders, track deliveries in real time, and manage online payments. This solution ensures speed, reliability, and ease of use.",
    date: "2023-10-06",
    stack: [
      { name: "Laravel" },
      { name: "Laravel" },
      { name: "HTML" },
      { name: "CSS3" },
      { name: "MySQL" },
      { name: "JavaScript" },
    ],
    video: "/assets/work/MolkaDelevery.mp4",
    github: "https://github.com/project2",
  },
  {
    num: "04",
    category: "Crud JS",
    title: "Product Management",
    description: "This project is an interactive CRUD application that allows managing products. It includes features like adding, updating, deleting, and dynamic searching of products. Developed with HTML, CSS3, and JavaScript, it provides an intuitive interface for quick and efficient management.",
    date: "2024-12-31",
    stack: [
      { name: "HTML" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    video: "/assets/work/Crudjs.mp4",
    github: "https://github.com/your-repo/crud-js",
  },
  {
    num: "05",
    category: "Angular 14",
    title: "Book Store - Book Management",
    description: "This project is an interactive web application developed with Angular 14, allowing users to browse a list of books, add them to or remove them from a cart. With a modern and responsive interface, the application features dynamic functionalities like conditional rendering, real-time user interaction, and efficient data management using Angular services.",
    date: "2024-12-31",
    stack: [
      { name: "Angular 14" },
      { name: "TypeScript" },
      { name: "CSS3" },
    ],
    video: "/assets/work/book.mp4",
    github: "https://github.com/your-repo/book-store",
  },
];
const Work = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1); // Valeur initiale du volume
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentProject(projects[currentIndex]);

    // Réinitialisation des vidéos
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex) {
        video.muted = true;
        video.currentTime = 0; // Réinitialiser la vidéo au début
        video.pause();
        setIsPlaying(false);
      }
    });
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleFullScreen = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.requestFullscreen();
      video.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const volumeValue = e.target.value;
    setVolume(volumeValue);
    videoRefs.current.forEach((video) => {
      if (video) {
        video.volume = volumeValue;
      }
    });
  };

  useEffect(() => {
    const updateProgress = () => {
      if (videoRefs.current[projects.indexOf(currentProject)]) {
        const video = videoRefs.current[projects.indexOf(currentProject)];
        const progressValue = (video.currentTime / video.duration) * 100;
        setProgress(progressValue);
      }
    };

    const video = videoRefs.current[projects.indexOf(currentProject)];
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [currentProject]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project details - moved above the video */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">
            <div className="flex flex-col gap-[15px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {currentProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                {currentProject.title}
              </h2>
              <p className="text-white/60 text-xl">Date: {currentProject.date}</p>
              <p className="text-white/60">{currentProject.description}</p>
              <ul className="flex gap-4">
                {currentProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== currentProject.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
               
                <Link href={currentProject.github}>
                  <button className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700">
                    <BsGithub size={20} />
                    GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Video slider - now below project details */}
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <video
                        src={project.video}
                        className="object-cover w-full h-full"
                        ref={(el) => (videoRefs.current[index] = el)}
                        loop
                        muted={isMuted}
                      />
                      {/* Video controls */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between w-full px-4">
                        {/* Play/Pause Button */}
                        <div
                          className="flex items-center justify-center w-12 h-12 text-white bg-black bg-opacity-50 rounded-full cursor-pointer"
                          onClick={() => togglePlayPause(index)}
                        >
                          {isPlaying ? <BsPauseFill size={30} /> : <BsPlayFill size={30} />}
                        </div>

                        {/* Mute Button */}
                        <div
                          className="flex items-center justify-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full cursor-pointer"
                          onClick={() => toggleMute(index)}
                        >
                          {isMuted ? <BsVolumeMute size={20} /> : <BsVolumeUp size={20} />}
                        </div>

                        {/* Fullscreen Button */}
                        <div
                          className="flex items-center justify-center w-10 h-10 text-white bg-black bg-opacity-50 rounded-full cursor-pointer"
                          onClick={() => handleFullScreen(index)}
                        >
                          <BsFullscreen size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-colors"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;