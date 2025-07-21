import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbBrandVscode } from "react-icons/tb";
import {
  SiFlutter,
  SiPrometheus,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiApachekafka,
  SiJenkins,
  SiAmazonaws
} from "react-icons/si";
import Image from "next/image";

function Aboutpage() {
  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="relative mt-14">
          <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
            About me
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
              <TbArrowBackUp className="dark:text-white  text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <img
            width={"100%"}
            height={"384px"}
            className="w-full h-96 rounded-lg object-cover"
            src="/img/abhilash.jpg"
            alt=""
          />
          <h4 className="my-11 font-InterBold">How it all started</h4>

          <p className="my-9">
          Exploring different fields during my first year of college, software development quickly caught my attention by
          seeing stuff made by my seniors. 
          I joined some Tech Clubs (ACM and ISTE), eager to immerse myself in the world of tech and to learn more. 
          As I delved deeper into it, I found it to be an incredibly dynamic pursuit. 
          The ability to create something tangible from lines of code fascinated me, 
          and I was drawn to the endless possibilities it offered.
          Though I didn&apos;t remained for long in the clubs due to looming academics, I connected with
          like-minded individuals during my time there who shared the same passion for technology. 
          Collaborating on projects, attending hackathons , and participating in 
          late night tech talks fueled my enthusiasm and accelerated my learning journey. 
          I found joy in building applications, and experimenting with new tech stacks.
          </p>

          <h4 className="my-10 font-InterBold">What&apos;s to come</h4>

          <p className="my-10">
            As an cse engineer, I have a strong passion for technology and I&apos;m
            always on the lookout for the latest developments and trends. I&apos;m
            particularly interested in exploring how backend systems work behind the scenes,
            and how companies build scalable and resilient architectures. In the future, I
            hope to continue pushing the boundaries of technology,
            and to use my skills to create innovative solutions that make a real
            impact to society. I&apos;m excited to see where this journey takes me, and
            I look forward to sharing my experiences and insights along the way. 
            Till then keep iterating! 🥸
          </p>

          <h4 className="font-InterBold">My Stack</h4>

          <div className="flex gap-x-8 justify-around  mt-16">
            <SiFlutter className="text-2xl text-[#3294be] " />
            <SiReact className="text-[#00BDFD] text-2xl" />
            <SiMongodb className="text-[#00DA4C] text-2xl" />
            <SiNodedotjs className="text-[#8CC84B] text-2xl" />
            <SiPrometheus className="text-[#CC2929] text-2xl" />
            <SiDocker className="text-[#2496ED] text-2xl" />
            <SiKubernetes className="text-[#326CE5] text-2xl" />
            <SiLinux className="text-[#FCC624] text-2xl" />
            <SiApachekafka className="text-[#285f96] text-2xl" />
            <SiJenkins className="text-[#D24939] text-2xl" />
            <SiAmazonaws className="text-[#FF9900] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;