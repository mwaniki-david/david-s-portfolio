"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <main className="w-screen h-screen relative ">
      <div
        className="flex items-center w-full h-full bg-cover bg-center "
        style={{ backgroundImage: "url(/dylanproject.jpg)" }}
      >
        <div
        
        className="flex pl-[80px] pt-[120px] text-[40px] md:text-[60px] md:pt-[190px] md:pb-20 md:pl-[100px] flex-col  z-[10] px-1 ">
          <h1 className="  text-white font-bold uppercase ">
            hello
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            !!
            </span>
          </h1>
          <h2 className="md:text-[50px] text-white font-semibold">
          AM DAVID MWANIKI I'M A
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
             FRONT END DEVELOPER.
            </span>
          </h2>
          <p className="text-white text-[20px] max-w-[700px] mb-3  md:block">
          I’m a full-stack developer specializing in building and
          designing exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
          </p>
          <div className="flex gap-3 md:flex-row md:flex md:gap-3">
            <Link
              href="/my-skills"
              className="rounded-[3px] group relative border border-white bg-purple-500 hover:bg-purple-800 px-5 py-3 text-lg text-white "
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[3px] group relative bg-trasparent px-5 border border-white hover:bg-purple-800 py-3 text-lg text-white "
            >
              <div className="absolute rounded-[3px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[3px] group relative bg-trasparent border border-white hover:bg-purple-800 px-5 py-3 text-lg text-white"
            >
              <div className="absolute rounded-[3px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative flex  bottom-[190px]  z-[20]  flex-row md:hidden gap-3 px-3 ml-[70px]">
        <Link
          href="/my-skills"
          className="rounded-[3px] group bg-purple-500 px-5 py-3 text-lg text-white hover:bg-purple-800  max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[3px] group bg-trasparent border border-white px-5 py-3 text-lg text-white hover:bg-purple-800  max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[3px] group bg-trasparent border border-white px-5 py-3 text-lg text-white hover:bg-purple-800  max-w-[200px]"
        >
          Contact me
        </Link>
      </div> */}

       {/* <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div> */}

      {/* <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />

      <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%] w-full z-[50]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
    </main>
  );
}