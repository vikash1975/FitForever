

import React from "react";
import { Link } from "react-router-dom";

function Programs({program}) {
  return (
    <section className="min-h-screen bg-black text-white py-16">

      <h3 className="text-center font-extrabold text-3xl mb-2">
        OUR PROGRAMS
      </h3>

      <p className="text-center font-mono text-gray-400 mb-10">
        Train Smart. Get Strong. Stay Fit.
      </p>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-6">

        {/* Strength Training */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="strengthtraining.jpg"
            alt="Strength Training"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Strength Training
            </h3>

            <p className="text-gray-400 mb-5">
              Build strength and improve body power.
            </p>

            <Link to="/program"  className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>


        {/* Weight Loss */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="weightloss.jpg"
            alt="Weight Loss"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Weight Loss
            </h3>

            <p className="text-gray-400 mb-5">
              Burn calories and achieve a healthier body.
            </p>

            <Link to="/program"  className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>


        {/* Muscle Building */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="musclebuilding.webp"
            alt="Muscle Building"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Muscle Building
            </h3>

            <p className="text-gray-400 mb-5">
              Build lean muscle and increase overall strength.
            </p>

            <Link to="/program"  className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>


        {/* Personal Training */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="personaltraining.jpg"
            alt="Personal Training"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Personal Training
            </h3>

            <p className="text-gray-400 mb-5">
              Get personalized guidance from professional trainers.
            </p>

            <Link to="/link" className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>


        {/* Cardio */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="cardio.jpg"
            alt="Cardio and Endurance"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Cardio & Endurance
            </h3>

            <p className="text-gray-400 mb-5">
              Improve stamina, endurance and cardiovascular fitness.
            </p>

            <Link to="/program"  className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>


        {/* Functional Training */}
        <div className="w-full sm:w-[48%] lg:w-[31%] border border-gray-700 rounded-xl overflow-hidden">
          <img
            src="functionaltraining.webp"
            alt="Functional Training"
            className="w-full h-52 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">
              Functional Training
            </h3>

            <p className="text-gray-400 mb-5">
              Improve mobility, balance, flexibility and daily movement.
            </p>

            <Link to="program" className="px-5 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
              Explore Program
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Programs;





