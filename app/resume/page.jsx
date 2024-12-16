"use client"
import {motion} from "framer-motion";
import { Title } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs , FaReact , FaNodeJs , FaPhp, FaPython} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs ,SiLaravel , SiMaterialdesign , SiNumpy ,SiMatplotlip} from "react-icons/si"


//about data
const about={
  title: "About me" ,
  description :"Welcome to my Portfolio website !I am currently a second-year Master's student in Data Science research and a freelance backend web developer. I hold a Bachelor's degree in Computer Science, specialized in Big Data and Data Analysis. I am passionate about Data Science, including artificial intelligence and its subfields, as well as data analysis and visualization. My goal is to transform data into valuable insights and provide innovative solutions through Business Intelligence. I am committed to constantly exploring new technologies and contributing to projects that enhance the user experience."
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
      position: "Freelance Fullstack Laravel Developer",
      duration: "September 2023 - July 2024",
    },
    {
      company: "WENTY",
      position: "Freelance Fullstack Laravel Developer",
      duration: "September 2023 - July 2024",
    },
    {
      company: "WENTY",
      position: "Freelance Fullstack Laravel Developer",
      duration: "September 2023 - July 2024",
    },
    {
      company: "ISIMS",
      position: "Data Scientist",
      duration: "5 months (Internship)",
    },
    {
      company: "ISS4U",
      position: "Data Scientist & Web Developer",
      duration: "5 months (Internship)",
    },
    {
      company: "Designet Web Agency",
      position: "Laravel Developer",
      duration: "Summer 2022",
    },
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
  },
  {
    Institution: "Zawet El Mageiz Secondary School.",
    Degree: "High School Diploma (Tunisian Equivalent)",
    Duration:"2020"
  },
  
],
 };


//Skils Data 
 const skills ={
  title : "My skills",
  description:"This section focuses on my key skills and technical abilities.",
 skillslist:[
  {
    icon : <FaHtml5/>,
    name: "Html 5",
  },

  {
    icon : <FaCss3/>,
    name: "Css 3",
  },
  {
    icon : <FaJs/>,
    name: "javascipt",
  },
  {
    icon : <FaReact/>,
    name: "React.Js",
  },
  {
    icon : <SiTailwindcss/>,
    name: "Tailwind.css ",
  },
  {
    icon : <SiNextdotjs/>,
    name: "Next.js",
  },
  {
    icon : <FaNodeJs/>,
    name: "Node.js",
  },
  {
    icon : <FaPhp/>,
    name: "php",
  },
  {
    icon : <SiLaravel/>,
    name: "laravel 10",
  },
  {
    icon : <SiMaterialdesign/>,
    name: "Matriel Ui",
  },
  {
    icon : <FaPhp/>,
    name: "php",
  },
  {
    icon : <FaPython/>,
    name: "Python",
  },
  {
    icon : <SiNumpy/>,
    name: "Numpy",
  },
  
  
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
   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
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
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
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

      {/* Skills*/}
      <TabsContent  value ="skills" className=" w-full ">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto  xl:mx-0">
                {skills.description}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillslist.map((skill,index) =>{
                      return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 " >{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>;
                })}
              </ul>
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
