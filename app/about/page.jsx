import Link from "next/link";
import React from "react";
import { TbArrowBackUp, TbBrandVscode } from "react-icons/tb";
import {
  SiFlutter,
  SiKotlin,
  SiReact,
  SiMongodb,
  SiExpress,
  SiTwitter
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
          Exploring different fields during my first year of college, coding quickly caught my attention. I joined some Tech Clubs, eager to immerse myself in the world of software development. As I delved deeper into programming, I found it to be an incredibly dynamic and rewarding pursuit. The ability to create something tangible from lines of code fascinated me, and I was drawn to the endless possibilities it offered.Being part of Tech Clubs provided me with a supportive community of like-minded individuals who shared my passion for technology. Collaborating on projects, attending workshops, and participating in coding competitions fueled my enthusiasm and accelerated my learning journey. I found joy in solving problems, building applications, and experimenting with new technologies.
          </p>

          <h4 className="my-10 font-InterBold">What&apos;s to come</h4>

          <p className="my-10">
            As an engineer, I have a strong passion for technology and I&apos;m
            always on the lookout for the latest developments and trends. I&apos;m
            particularly interested in exploring how design can be integrated
            with AI to create even better user experiences. In the future, I
            hope to continue pushing the boundaries of design and technology,
            and to use my skills to create innovative solutions that make a real
            impact. I&apos;m excited to see where this journey takes me, and I look
            forward to sharing my experiences and insights along the way. Till
            then keep iterating!
          </p>

          <h4 className="font-InterBold">My Stack</h4>

          <div className="flex gap-x-8 justify-around  mt-16">
            <SiFlutter className="text-2xl" />
            <SiExpress className="text-[#00005F] text-2xl" />
            <SiReact className="text-[#00BDFD] text-2xl" />
            <SiMongodb className="text-[#00DA4C] text-2xl" />
            <SiExpress className="text-[#5264FA] text-2xl" />
            <SiTwitter className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;