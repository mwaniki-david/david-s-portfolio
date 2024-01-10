import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(redmoon.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center "
    >
      <div
        style={{ backgroundImage: "url(redsky.jpg" }}
        className="h-[70%] w-[80%] mt-10 ml-12 relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute px-6   left-[70px] bottom-[20px]  md:w-[60%]  ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;