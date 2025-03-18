"use client"
import {motion} from "framer-motion";
import { Title } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs , FaReact , FaNodeJs , FaPhp, FaPython,FaFlask} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs ,SiLaravel , SiMaterialdesign ,SiScikitlearn,SiTalend , SiNumpy,SiPytorch , SiDeepl,SiOpencv, SiGit, SiGithub, SiNotion, SiBitbucket} from "react-icons/si"
//about data
const about={
  title: "About me" ,
  description :"Welcome to my portfolio website!            I am a second-year Master's student in Data Science research. I hold a Bachelor's degree in Computer Science, specializing in Big Data and Data Analysis.Passionate about web development, the world of data, and artificial intelligence, I strive to transform data into impactful and meaningful insights. Curious, driven, and lucky, I am constantly exploring new technologies and seeking exciting challenges to contribute to innovative projects and enhance user experiences."
, info:[
  {
    fieldName: "Name", 
    fieldValue: "Samar BELHADJ AMOR"
  },
  {
    fieldName: "Phone", 
    fieldValue: "(+216) 55 114 715 "
  },
  {
    fieldName: "Experience", 
    fieldValue: " +1 years"
  },
  {
    fieldName: "Nationality", 
    fieldValue: "Tunisian"
  },
  {
    fieldName: "Email", 
    fieldValue: "Belhajjamorsamar@gmail.com"
  },
  {
    fieldName: "Freelance", 
    fieldValue: "Available"
  },
  {
    fieldName: "Language", 
    fieldValue: "Arabic, Frensh, English"
  },

]


};

//EXPERIENCE DATA
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Here is an overview of my key professional experiences, showcasing my journey in web development and data science.",
  items: [
    
  
    {
      company: "WENTY",
      position: "Fullstack Laravel Developer (Freelance)",
      duration: " September 2023 - July 2024",
    },
    {
      company: "ISIMS",
      position: "Data Scientist (Internship)",
      duration: "Février 2024 - Mai ",
    },
    {
      company: "ISS4U",
      position: "Data Scientist & Web Developer (Internship)",
      duration: "Février 2023 - Juin ",
    },
    {
      company: "Designet Web Agency",
      position: "Laravel Developer (Summer Internship)",
      duration: " July - August 2022",
    }
  ],
};


//Education DATA
const Education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  description:"Here, you’ll find an overview of my educational background and achievements.",
items:[
  {
    Institution: "Higher Institute of Computer Science and Multimedia of Sfax .",
    Degree: "Master's Research in Data Science",
    Duration:"2023 - Present",
    descrip :"Currently in the 2nd year of the program."

  },

  {
    Institution: "Higher Institute of Computer Science and Multimedia of Sfax .",
    Degree: "Bachelor's Degree in Computer Science",
    Duration:"2020 - 2023"
  },],};
//skills
const skills = {
    title: "My Skills",
    description: "Here are some of the skills I have developed over time.",
    sections: [
      {
        name: "Web Development",
        skills: [
          {
            icon: <FaHtml5 />,
            name: "HTML5"
          },
          {
            icon: <FaCss3 />,
            name: "CSS3"
          },
          {
            icon: <FaJs />,
            name: "JavaScript"
          },
          {
            icon: <FaReact />,
            name: "React"
          },
          {
            icon: <FaNodeJs />,
            name: "Node.js"
          },
          {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
          },
          {
            icon: <SiMaterialdesign />,
            name: "Material Design"
          },
          {
            icon: <SiNextdotjs />,
            name: "Next.js"
          },
          {
            icon: <FaPhp />,
            name: "PHP"
          },
          {
            icon: <SiLaravel />,
            name: "Laravel"
          },
          {
            icon: <FaPython />,
            name: "Python"
          },
          {
            icon: <FaFlask />,
            name: "Flask"
          },
         
        ]
      },
      {
        name: "Data Science",
        skills: [
          {
            icon: <FaPython />,
            name: "Python"
          },
          {
            icon: <SiNumpy />,
            name: "NumPy"
          },
          {
            icon: <SiPytorch/>,
            name: "Pytorch"
          },
          {
            icon: <SiOpencv/>,
            name: "Opencv"
          },
          {
            icon: <SiDeepl/>,
            name: " Deeplearning "
          },
          {
            icon: <SiScikitlearn/>,
            name: " Scikitlearn "
          },
          {
            icon: <SiTalend/>,
            name: "Talend "
          },
          
         
        ]
      },
      {
        name: "Tools", // Nouvelle section pour les outils
        skills: [
          {
            icon: <SiGit />,
            name: "Git"
          },
          {
            icon: <SiGithub />,
            name: "GitHub"
          },
          {
            icon: <SiNotion />,
            name: "Notion"
          },
          {
            icon: <SiBitbucket />,
            name: "Bitbucket"
          },
         
        ]
      }
    ]
};
  

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { Tooltip,TooltipProvider, TooltipContent,TooltipTrigger } from "@/components/ui/tooltip";


const Resume = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 mt-[70px]">
    <div className="container mx-auto">
     <Tabs 
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]">
     <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
       <TabsTrigger value="experience">Experience</TabsTrigger>
       <TabsTrigger value="education">Education</TabsTrigger>
       <TabsTrigger value="skills">Skills</TabsTrigger>
       <TabsTrigger value="about">About me</TabsTrigger>
     </TabsList>

     {/* content*/}
     <div className="min-h-[70vh] w-full ">
   
     {/* Experience*/}
     <TabsContent value = "experience" className=" w-full ">
         <div  className= "flex flex-col gap-[30px] text-center xl:text-left"> 
           <h3 className= "text-4xl font-bold ">{experience.title}</h3>
           <p  className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
           {experience.description}
           </p>
           <ScrollArea className="h-[400px]">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
              {experience.items.map((item, index)=>{
                return (
                <li
                 key={index} 
                 className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center 
                 items-center lg:items-start gap-1 ">
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                  {item.position}
                  </h3>
                  <div className="flex items-center gap-3 ">
                  {/*dot*/}
                    <span  className="w-[6px] h-[6px] rounded-full  bg-accent"></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>
                </li>
                );
              })}
              
            </ul>
          </ScrollArea>
         </div>
     </TabsContent>

      {/* Education*/}
      <TabsContent value ="education"  className ="w-full" >
      <div  className= "flex flex-col gap-[30px] text-center xl:text-left"> 
           <h3 className= "text-4xl font-bold ">{Education.title}</h3>
           <p  className= "max-w-[600px] text-white/60 mx-auto xl:mx-0">
           {Education.description}
           </p>
           <ScrollArea className="h-[400px] overflow-y-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] ">
              {Education.items.map((item, index)=>{
                return (
                <li
                 key={index} 
                 className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center 
                 items-center lg:items-start gap-1 ">
                  <span className="text-accent">{item.Duration}</span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                  {item.Degree}
                  </h3>
                  <div className="flex items-center gap-2 ">
                  {/*dot*/}
                    <span  className="w-[6px] h-[6px] rounded-full  bg-accent"></span>
                    <p className="text-white/60">{item.Institution}</p>
                  </div>
                </li>
                );
              })}
              
            </ul>
          </ScrollArea>
      </div>
     </TabsContent>

{/* Skills */}
<TabsContent value="skills" className="w-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {skills.description}
      </p>
    </div>

    {/* Section for Web Development Skills */}
    <div className="flex flex-col gap-[30px]">
      <h4 className="text-3xl font-semibold text-accent">Web Development</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.sections[0].skills.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>

    {/* Section for Data Science Skills */}
    <div className="flex flex-col gap-[30px]">
      <h4 className="text-3xl font-semibold text-accent">Data Science</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.sections[1].skills.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>

    {/* Section for Tools (New) */}
    <div className="flex flex-col gap-[30px]">
      <h4 className="text-3xl font-semibold text-accent">Tools</h4>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.sections[2].skills.map((tool, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                      {tool.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{tool.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>

    {/* Add more sections as needed */}
  </div>
</TabsContent>



      {/* About me*/}
      <TabsContent  value ="about" className=" w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[750px] mx-auto xl:mx-0 ">
                {about.info.map((item,index)=>{
                  return (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60 ">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>

                  </li>
                  );
                })}
              </ul>
            </div>
      </TabsContent>


     </div>
     </Tabs>
    </div>
  </motion.div>
);
};

export default Resume
