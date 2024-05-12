import React from 'react';
import Button1 from '../components/button1/Button1';

const Contact = () => {
  return (
    <main className="bg-slate-300 flex flex-col justify-center h-screen items-center">
  
        <h1 className="text-black font-semibold text-5xl mb-8 mr-8">Contact Us</h1>
        <form className="flex flex-col ml-6 gap-4">
          <input className="border border-gray-400 text-black  rounded-md p-2" type="text" name="name" placeholder="Your Name" />
          <input className="border border-gray-400 text-black  rounded-md p-2" type="email" name="email" placeholder="Your Email" />
          <textarea className="border border-gray-400 text-black  rounded-md p-2 h-32" name="message" placeholder="Your Message"></textarea>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300">Send Message</button>
        </form>

<div className='my-5 mx-5'>
        <Button1 />
        </div>
    </main>
  );
};

export default Contact;
