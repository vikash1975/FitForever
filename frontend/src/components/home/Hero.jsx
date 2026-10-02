
// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden">

//       {/* Background Image */}
//       <img
//         src="/bacgroundimage.avif"
//         alt="Gym"
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/65"></div>

//       {/* Main Content */}
//        < className="relative z-10 min-h-screen px-6 py-6 md:px-10"> 

//         {/* Navbar */}
//         {/* <nav className=" fixed top-0 left-0 w-full z-50 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">

//           {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//   <img
//     src="/logo.png"
//     alt="FitForever"
//     className="w-15 h-15 object-contain"
//   />
// </Link>

          
          
//           <div className="hidden items-center gap-8 md:flex">

//             <Link
//               to="/"
//               className="text-sm font-medium text-white transition hover:text-lime-400"
//             >
//               Home
//             </Link>

//               <Link
//               to="/about"
//               className="text-sm font-medium text-white/80 transition hover:text-lime-400"
//             >
//               About
//             </Link>

//             <Link
//               to="/programs"
//               className="text-sm font-medium text-white/80 transition hover:text-lime-400"
//             >
//               Programs
//             </Link>

//             <Link
//               to="/pricing"
//               className="text-sm font-medium text-white/80 transition hover:text-lime-400"
//             >
//               Pricing
//             </Link>

          

//           </div>

//           {/* Join Button */}
//           <Link
//             to="/register"
//             className="rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300 hover:scale-105"
//           >
//             Join Now
//           </Link>

//         </nav> */}

//         {/* Hero Content */}
//         <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center">

//           <div className="max-w-3xl">

//             <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
//               Train • Track • Transform
//             </p>

//             <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
//               BUILD YOUR
//               <br />
//               <span className="text-lime-400">BEST SELF.</span>
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-7 text-white/70 md:text-lg">
//               Manage your fitness journey, track your progress and
//               achieve your goals with FitForever.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">

//               <Link
//                 to="/register"
//                 className="rounded-xl bg-lime-400 px-7 py-3.5 font-bold text-black transition hover:bg-lime-300"
//               >
//                 Start Training →
//               </Link>

//               <Link
//                 to="/programs"
//                 className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
//               >
//                 Explore Programs
//               </Link>

//             </div>

//           </div>

//         </div>

    
//     </section>
//   );
// };

// export default Hero;\\\\\\











import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <img
        src="/bacgroundimage.avif"
        alt="Gym"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 min-h-screen px-6 py-6 md:px-10">

        {/* Hero Content */}
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
              Train • Track • Transform
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-8xl">
              BUILD YOUR
              <br />
              <span className="text-lime-400">BEST SELF.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 md:text-lg">
              Manage your fitness journey, track your progress and
              achieve your goals with FitForever.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-lime-400 px-7 py-3.5 font-bold text-black transition hover:bg-lime-300"
              >
                Start Training →
              </Link>

              <Link
                to="/program"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Programs
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;