import React from "react";
import Button1 from "../components/button1/Button1";

const About = () => {
  return (
    <div className="bg-slate-300 flex flex-col justify-center items-center h-screen">
      <div className="bg-slate-400 text-black font-semibold text-5xl p-6 rounded-xl hover:bg-slate-700 transform hover:scale-110 transition duration-100">About</div>
      <div className='my-5 mx-5'>
        <Button1 />
        </div>
    </div>
  );
};

export default About;
