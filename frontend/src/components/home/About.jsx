import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    // 1. md:flex-row se desktop par side-by-side aur mobile par ek ke neeche ek hoga
    // 2. max-w-7xl aur mx-auto se content screen ke beech mein professional dikhega
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white py-12 px-6 md:px-12 max-w-7xl mx-auto gap-8">
      
      {/* Left Div - Image Container (Aadha Hissa) */}
      <div className="w-full md:w-1/2">
        <img 
          src="sideimage.jpg" 
          alt="Fitness training" 
          className="w-full h-auto rounded-xl object-cover shadow-lg border border-zinc-8px" 
        />
      </div>

      {/* Right Div - Text Content Container (Aadha Hissa) */}
      <div className="w-full md:w-1/2 space-y-4">
        {/* Chhoti Red/Yellow sub-heading */}
        <h3 className="text-lime-500 font-bold uppercase tracking-widest text-sm md:text-base">
          About Us
        </h3>
        
        {/* Badi Heading - Gym Style Bold */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight text-white">
          Begin Your <span className="text-lime-300">Fitness Story</span> With FitForever
        </h1>
        
        {/* Paragraph Description */}
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
          We're more than just a fitness center — we're a movement built around real transformation. 
          Our mission is simple: help people become stronger, healthier, and more confident every single day.
        </p>
      <div className="flex ">
        <div>
            <h3 className="font-semibold">NUTRITION GUIDANCE </h3>
            <p className="text-zinc-400">We measure progress, not just promises - and we deliver</p>
        </div>

        <div>
           <h3 className="font-semibold"> GOAL-FOCUSED  COACHING</h3>
           <p className="text-zinc-400">Backed By experience a deep commitment to your success.</p>
            </div>
      </div>
       
       <div className="w-50 flex items-center justify-center bg-lime-400 text-center h-20 border rounded-2xl text-black font-semibold"><Link to="/trainers">MEET OUR TRAINERS</Link></div>
      </div>

    </section>
  );
}

export default About;
