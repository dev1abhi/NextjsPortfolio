"use client";

import React, { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";

import Status from "@/app/Status/page";
import Link from "next/link";

import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    imgLink: "/img/CAP.png",
    date: 2025,
    title: "Capacity Advisor for Monitoring Resources",
    subT:
      "Interned at HPE to build a capacity advisor for monitoring data pipeline like Kafka using Prometheus, JMX exporter and Node exporter. Stress tested Kafka host server across CPU, memory, disk, and network I/O. Helped design an ML model to predict Kafka crashes via JMX/Node metrics.",
    link: "https://github.com/dev1abhi/Capacity-Advisor-for-Monitoring-Resources",
  },
  {
    imgLink: "/img/bingflix.png",
    date: 2024,
    title: "BingFlix Website : OTT Platform",
    subT:
      "Built a full-stack platform using React, Tailwind CSS, JavaScript, and Node.js, powered by the TMDB API. Integrated streaming through 3rd-party scrapers. Achieved 27+ stars on GitHub. Features CI/CD pipeline with Jenkins, Docker, Helm, and Kubernetes for testing deployment.",
    link: "https://bingflix.vercel.app/",
  },
  {
    imgLink: "/img/lashic.png",
    date: 2024,
    title: "Lashic – Music Streaming App",
    subT:
      "Built with TypeScript, Lashic offers seamless music streaming with playlist support, search functionality, and a smooth user interface. Designed for discovering and organizing tracks with ease.",
    link: "https://lashic3.vercel.app/",
  },
  {
    imgLink: "/img/vitmail.png",
    date: 2023,
    title: "ViTMail : Email Service App",
    subT:
      "Implementing the Gmail API Service to fetch the mails to the app and Google’s Gemini model to summarize the mails through AI.",
    link: "https://github.com/dev1abhi/ViTMail",
  },
  {
    imgLink: "/img/nfc.jpg",
    date: 2024,
    title: "NFC_App – Tag Detection Tool",
    subT:
      "A cross-platform Flutter app for reading NFC tags. Useful for automation setups and quick scans, with clean UI and native support.",
    link: "https://github.com/dev1abhi/NFC_App",
  },
  {
    imgLink: "/img/imagenica.png",
    date: 2023,
    title: "Imagenica (VS Code Extension)",
    subT:
      "VS Code extension that fetches or generates images from prompts or Unsplash. Streamlines image search and integration into markdown or design workflows.",
    link: "https://github.com/dev1abhi/imagenica",
  },
];


function Projpage() {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".box",

      { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 },

      {
        duration: 0.2,
      }
    );
  }, [animate]);
  return (
    <div ref={scope} className="relative max-w-5xl mx-auto px-8">
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Projects
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-44">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <motion.div
                initial={{ opacity: 0, scale: 0, filter: "blur(0px)", x: 0 }}
                className="h-60 box w-64 "
              >
                <Image
                  width={600}
                  height={600}
                  alt={each.subT}
                  className=" h-full w-full md:w-64 object-cover rounded-md"
                  src={each.imgLink}
                />
              </motion.div>

              <div>
                <div className="w-fit flex items-center gap-x-2 ">
                  <div className=" px-2 py-1 text-xs font-semibold   border rounded-full dark:border-neutral-700">
                    <span>{each.date}</span>
                  </div>
                  <div className=" flex items-center gap-x-3">
                    <Status
                      Relaxing
                      className=" border rounded-full dark:border-neutral-700 px-2 py-1"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="font-InterBold text-lg max-w-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>

                  <Link href={each.link} target="_blank" rel="noopener noreferrer">
  <button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
    Visit Now
  </button>
</Link>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projpage;