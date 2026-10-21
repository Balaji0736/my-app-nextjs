"use client";

import { useState } from "react";

type Button = {
  url:string;
  title:string;
}




export default function ContactCTA({button,title,description}:{button?:Button,title?:string,description?:string}) {

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
        const [contactNo, setContactNo] = useState("");
        const [message, setMessage] = useState("");
const[error,setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if(name == null || name == ""){
      setError("Name is Required");
      
    }

    
console.log(error);

  }

  return (
    <section id="contact" className="bg-indigo-600 py-16">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
            {title}
          </h2>
          <div className="text-indigo-200 text-sm" dangerouslySetInnerHTML={{__html: description ?? ""}} />
            
          
        </div>

        {/* CTA Button */}
        <a
          href={button?.url}
          className="shrink-0 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-4 rounded-lg transition-colors text-sm whitespace-nowrap w-full md:w-auto text-center"
        >
          {button?.title}
        </a>


      </div>
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
         <div>
          <label htmlFor="contactNo" className="block text-sm font-medium mb-1">
          Contact Number
        </label>
        <input type="number" id="contactNo" value={contactNo} onChange={(e)=>setContactNo(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message
        </label>
        <input type="textarea" id="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button
        type="submit"
        className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
      </form>
      </div>
    </section>
  );
}