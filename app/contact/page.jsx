"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaMapMarkedAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+216) 55 114 715",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "belhajjamorsamar@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Tunisia Nabeul Haouaria",
  },
];

const Page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, service, message } = formData;

    // Construire le lien mailto
    const mailtoLink = `mailto:belhajjamorsamar@gmail.com?subject=Contact from ${firstname} ${lastname}&body=Email: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto mt-[70px]" >
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#2727272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent ">Let&apos;s work together</h3>
              <p className="text-white/60">
                Hi, I&apos;m Samar. If you have an idea and would like us to work together, I&apos;m here to help you.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 focus:border-accent">
                <Input name="firstname" type="text" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input name="lastname" type="text" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                <Input name="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
              </div>

              {/* Select */}
              <Select
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />

              {/* Button */}
              <Button size="md" type="submit" className="max-w-40 h-10">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
