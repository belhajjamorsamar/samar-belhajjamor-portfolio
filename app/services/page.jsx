
"use client"
import { motion } from "framer-motion";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link"
import { Description } from "@radix-ui/react-dialog";


const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Development of responsive and modern websites tailored to client needs, using the latest web technologies and frameworks.",
    href: "link",
  },
  {
    num: "02",
    title: "Data Scientist",
    description: "Analysis and processing of large datasets to extract insights and build predictive models for data-driven decision-making.",
    href: "link",
  },
 
  {
   num: "03",
    title: "Data Visualization with Power BI",
    description: "Creating interactive dashboards and reports with Power BI to transform raw data into actionable insights through dynamic visualizations.",
    href: "link",

  },
];

const Services = () => {
  return (
   <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-[70px]">
   <div className="container mx-auto">
    <motion.div initial={{opacity:0}}
     animate={{
      opacity:1 , 
      transition:{delay:2.4, duration: 0.4, ease :"easeIn"},
    }}
    className="grid grif-cols-1 md:grid-cols-2  gap-[60px]"
    >

    {services.map((service,index)=>{
      return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
      {/* Top */}
        <div className="w-full flex justify-between items-center">
          <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
          transition-all duration-5020">{service.num}</div>
          <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ">
            <BsArrowDownRight className="text-primary text-3xl"/>
          </Link>
        </div>
        {/* Heading */}
        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
        {/* descritpion */}
        <p className="text-white/60">{service.description}</p>
        {/*border */}
        <div className="border-b border-white/20 w-full"></div>
      </div>
    })}
    </motion.div>
   </div>
    
   </section>
  )
}

export default Services
