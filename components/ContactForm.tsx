import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-4xl font-bold mb-7 text-white uppercase ">Contact Me</h2>
      <div className="mb-7 ">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-black placeholder-black-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-7">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-black placeholder-black-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-7">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-6 text-sm text-black placeholder-black-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-6 py-6 text-base font-bold text-white uppercase transition-all duration-150 ease-linear bg-purple-500 hover:bg-purple-800 rounded-[3px]">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;