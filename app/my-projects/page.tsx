"use client"
import {Tilt} from "react-tilt";
import Image from "next/image";
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/dylanproject.jpg)"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className="absolute flex flex-col top-0 mt-[80px] lg:mt-[100px]   items-start">
      <h1 className="flex font-semibold text-white md:text-[50px] text-[45px] underline lg:ml-[50px] mt-3">
            PROJECTS 
          </h1>
          <p className="text-[18px] lg:text-[20px] py-3 md:text-[17px] ml-[15px] text-white max-w-[900px]   hidden lg:block ">
          Im a skilled software developer with experience in TypeScript and
             JavaScript, and expertise in frameworks like React, Node.js, and
             Three.js. Im a quick learner and collaborate closely with clients to
             create efficient, scalable, and user-friendly solutions that solve
             real-world problems. Let's work together to bring your ideas to life!
          </p>
      </div>
      <div className="flex flex-col  md:flex-row max-w-[400px] max-h-[500px] md:max-w-[900px] md:max-h-[900px] justify-between md:gap-14  px-10 py-12 mt-[140px] gap-6 md:ml-[55px] lg:ml-[1px] lg:mt-[260px]">
          <Tilt
          options={ {
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
            <div className="w-full h-full object-cover   border-[4px] border-white-800 rounded-lg ">
              <Image

              src="/greensky.jpg"
              alt="greensky"
              className=" w-full h-full object-cover rounded-sm"
              height={400}
              width={500}
              />
            </div>
          </Tilt>
          <Tilt
          options={ {
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
            <div className="w-full h-full object-cover   border-[4px] border-white-800 rounded-lg">
              <Image

              src="/greensky.jpg"
              alt="greensky"
              className=" w-full h-full object-cover rounded-sm"
              height={400}
              width={500}
              />
            </div>
          </Tilt>
        </div>
    </div>
  )
}

export default Page;