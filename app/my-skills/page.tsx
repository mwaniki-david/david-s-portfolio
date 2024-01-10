"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import {Tilt} from "react-tilt";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/moonblack.jpg)" }}
      className="h-screen w-screen flex   items-center justify-center bg-cover bg-center"
    >
      <div className=" flex flex-col lg:flex-row justify-center py-2 px-6 text-[15px] mt-[66px]">
        <div className="flex flex-col  md:text-[20px] lg:mb-[80px] ">
          <h1 className="font-semibold text-white text-[35px] md:text-[50px] ml-[150px] underline underline-offset-10   ">
            ABOUT ME {" "}
          </h1>
          <h2 className="text-white text-[25px] md:text-[25px] font-regular ml-[165px] ">
            Overview
          </h2>
          <p className="text-[18px] py-3 md:text-[20px] ml-[65px] text-white max-w-[600px] px-3 lg:mt-[50px] ">
          Im a skilled software developer with experience in TypeScript and
             JavaScript, and expertise in frameworks like React, Node.js, and
             Three.js. Im a quick learner and collaborate closely with clients to
             create efficient, scalable, and user-friendly solutions that solve
             real-world problems. Let's work together to bring your ideas to life!
          </p>

        </div>
        <div className=" ">
          <Tilt
          options={ {
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
            <div className="flex max-w-[300px] max-h-[450px] lg:max-w-[800px] lg:max-h-[900px] lg:mt-[100px] lg:mr-[100px] ml-[100px] md:ml-[120px] object-cover   border-[4px] border-white-800 rounded-lg">
              <Image

              src="/greensky.jpg"
              alt="greensky"
              className=" w-full h-full object-cover rounded-sm"
              height={1700}
              width={600}
              />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Page;