"use client";

import { useState } from "react"; // can only use in client component
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Statuspage from "../Status/page";


const projects = [
    {
    imgLink: "/img/CAP.png",
    date: 2025,
    title: "Capacity Advisor for Monitoring Resources",
    subT:
      "Interned at HPE to build a capacity advisor for monitoring data pipeline like Kafka using Prometheus, JMX exporter and Node exporter . Stress tested Kafka host server across CPU, memory, disk, and network I/O. Helped design an ML model to predict Kafka crashes via JMX/Node metrics.",
    githubLink: "https://github.com/dev1abhi/Capacity-Advisor-for-Monitoring-Resources",
  },
  {
    imgLink: "/img/bingflix.png",
    date: 2024,
    title: "BingFlix.com : OTT Streaming Platform",
    subT:
      "Built a full-stack platform using React, Tailwind CSS, JavaScript, and Node.js, powered by the TMDB API. Integrated streaming through 3rd-party scrapers. Achieved 27+ stars on GitHub. features CI/CD pipeline with Jenkins, Docker, Helm, and Kubernetes for testing deployment.",
    githubLink: "https://github.com/dev1abhi/Bingflix-Website",
  },
  {
    imgLink: "/img/vitmail.png",
    date: 2023,
    title: "ViTMail : Email Service App",
    subT:
      "Collaborated on a college-focused Flutter app using Gmail API to fetch emails and Google's Gemini model to summarize them, reducing reading time.",
    githubLink: "https://github.com/dev1abhi/ViTMail", 
  },
];

  let link = [
    {
      date: "May 2024 - June 2024",
      imgLink: "/img/nalco.png",
      title: "Software Developer Intern",
      sub: "NALCO,Bhubaneswar",
      subTitle:
        "Developed a desktop application for the company's internal use, which helped in managing the company's data and resources.",
      bttn: "View my work",
    },
    {
      date: "May 2023 - Dec 2024",
      imgLink: "/img/acm.png",
      title: "Core Committee",
      sub: "ACM , VIT Vellore",
      subTitle:
        "Collaborated with a team of proficient app developers to create high-quality, production-level applications.",
      bttn: "View my work",
    },
    {
      date: "June 2023 - Oct 2024",
      imgLink: "/img/iste.jpg",
      title: "App Development Team , Senior Core",
      sub: "Indian Society of Technical Education",
      subTitle:
        "Collaborated with a dedicated team to develop a full-stack Flutter application during a project cycle.",
        bttn: "View my work",
     
    },
  
  ];

  function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard: ' + text);
      })
      .catch((error) => {
        console.error('Unable to copy to clipboard', error);
      });
  }


function Frontpage()
{
    const [show,setShow] = useState(link[0]);
    //margin top-32
    //horizontal gap between children of flex (gap-x-4)
    return  <div className="mt-32">
        <div className="flex gap-x-4"> 

        <Image className="w-16 h-16 rounded-full object-cover"
         width={300}
         height={300}
        src="/img/abhilash.jpg"
        alt="Profile"
        />

        <div>
        <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            Abhilash
          </h2>
          <Link href={"https://github.com/dev1abhi"}>
            <span className="text-neutral-500 ">@dev1abhi</span>
          </Link>
          <Statuspage isAvailable />
        </div>
        
        </div>


{/* about section */}
        <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold  uppercase ">
          About Me
        </h3>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
          As a backend engineer with a passion for devops, I’m driven by the challenge of creating technology that feels extensible and maintainable. My work on platform like Bingflix and my recent exploration into capacity planning, monitoring, and AI based alert systems during my internship reflect my desire to build systems that are not just functional but scalable and resilient.
        </p>
        <p className="mt-6 mb-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
           I believe the next generation of software will be powered by thoughtful automation, intelligent feedback, and relentless iteration and I’m here for it.
        </p>

{/*         <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
          View resume
        </button> */}

            <a href="https://drive.google.com/file/d/1O6Vx3Mndozjyzzwosdlbz2eoNRgP3-fL/view?usp=sharing" className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
  View resume
</a>

      </div>

{/* Project animation */}
<div>
  <div className="marquee relative my-24 h-10 max-w-10xl overflow-x-hidden">
    <div className="bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
    <motion.div
      className="track"
      variants={marqueeVariants}
      animate="animate"
    >
      <div className="flex gap-x-5 z mt-2 uppercase font-semibold justify-evenly text-sm text-neutral-700 whitespace-nowrap">  Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project</div>
    </motion.div>
    <div className="bg-gradient-to-l absolute top-0 right-0 z-20 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
  </div>
</div>


{/* Projects */}

<div className="">
 {projects.map((each,i)=>(
  <div key={i}>

     
    <div className="flex flex-col lg:flex-row gap-x-8 my-6">
      {/* Image */}
        <div className="h-60 w-full md:w-64">
          <Image
             width={700}
             height={700}
             alt="project"
             className="w-full h-full object-cover rounded-md"
             src={each.imgLink}
          />
        </div>

        <div>

              {/* date & status */}
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>{each.date}</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Statuspage
                      Relaxing
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="font-InterBold text-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <a
      href={each.githubLink} // Replace `each.githubLink` with the actual GitHub repository URL
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-11 border cursor-pointer border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 w-full bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md hover:bg-gray-200 hover:bg-opacity-50"
    >
      GitHub
    </a>
                </div>
          </div>
    </div>

    <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />

  </div>
  
 ))

 }
</div>

  {/* Marque texts */}

  <div>
        <div className="marquee my-24 h-10 relative  max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700 whitespace-nowrap">
               Experience Experience Experience Experience Experience  Experience Experience Experience Experience Experience  Experience Experience Experience Experience Experience  Experience Experience Experience Experience Experience  Experience Experience Experience Experience Experience  Experience Experience Experience Experience Experience
             
            </div>
          </motion.div>


          <div className="bg-gradient-to-l absolute top-0 right-0 z-20 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

      <div className="">
        <div className=" ">
          {link.map((each) => (
            <div key={each.title} className="my-8  p-2 rounded-md ">
              <div className="border border-neutral-700 rounded-full  w-fit px-2 p-1 flex items-center ">
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ">
                  {each.date}
                </span>
              </div>

              <div>
                <div className="flex gap-x-4 my-6">
                  <Image
                    width={400}
                    height={400}
                    className="w-14 h-14 rounded-full"
                    src={each.imgLink}
                    alt=""
                  />
                  <div>
                    <h1 className="font-InterBold  text-lg ">{each.title}</h1>
                    {/* you can add your desired links hrefs in the lnk array n wrap here with href */}
                    <Link className="font-semibold hover:underline" href={"/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>

                {/* <p className=" text-neutral-500 text-lg max-w-3xl">
                  {each.subTitle}
                </p> */}
              </div>

              {/* {show.bttn && (
                <button className="mt-10 border border-neutral-700/30 rounded-md px-2 py-2 flex justify-between items-center gap-x-2 lg:w-36 bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold">
                  <span>View my work</span>
                  <PiLockThin className="text-neutral-900 dark:text-neutral-200" />
                </button>
              )} */}
            </div>
          ))}
        </div>
      </div>

      {/* Marque texts */}

  <div>
        <div className="marquee my-24 h-10 relative  max-w-6xl overflow-x-hidden">
          <div className=" bg-gradient-to-r absolute z-10 from-[#fff] via-[#fff] dark:from-[#161616] dark:via-[#161616] to-transparent w-20 rounded-md h-9 transition-all ease-in duration-200" />
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className=" flex gap-x-5 mt-2 uppercase font-bold justify-evenly text-sm  text-neutral-700 whitespace-nowrap">
            ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS ✦ CONTACTS             
            </div>
          </motion.div>
          <div className="bg-gradient-to-l absolute top-0 right-0 z-20 dark:from-[#161616] dark:via-[#161616] from-[#fff] via-[#fff] to-transparent w-16 rounded-md h-9 transition-all ease-in duration-200" />
        </div>
      </div>

   {/* Contacts */}
   <div className="px-20">
  <div className="flex flex-col ">
  <button className=" border border-neutral-700/30 rounded-md px-2 py-2 flex justify-between items-center gap-x-2 w-30 bg-neutral-800/20 text-sm text-neutral-900 dark:text-neutral-200 font-semibold">
                  <span className="flex justify-between  w-full">
                  <p onClick={() => copyTextToClipboard('https://www.linkedin.com/in/abhilash-sarangi21/')}
                        className="hover:bg-gray-100 hover:bg-opacity-10 rounded-md p-1 cursor-pointer"
                  >Linkedin</p>
                  <p onClick={() => copyTextToClipboard('abhilashsarangi222@gmail.com')}
                  className="hover:bg-gray-100 hover:bg-opacity-10 rounded-md p-1 cursor-pointer"

                  >Gmail</p>
                  <p onClick={() => copyTextToClipboard('7064077209')}
                  className="hover:bg-gray-100 hover:bg-opacity-10 rounded-md p-1 cursor-pointer"
                  >Contact No</p>
                  </span>
                  
                </button>
  </div>
</div>



      <div className="mt-20">
        <p className="text-lg ">
          I take pleasure in meeting new people and am enthusiastic about
          assisting with any queries you may have.
        </p>

        <p className="text-lg mt-4">
          Additionally, I love discussing forgotten or unfinished projects and
          exploring the fascinating topic of how artificial intelligence could
          potentially dominate the world!!
        </p>
      </div>



    </div>
    
}


export default Frontpage

const marqueeVariants = {
  animate: {
    x: [0, -850],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 11,
        ease: "linear",
      },
    },
  },
};
