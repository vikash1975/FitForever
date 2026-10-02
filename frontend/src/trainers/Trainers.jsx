
import React, { useState } from "react";
import { Link } from "react-router-dom";
import trainers from "./trainer.js";

function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedTrainer(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">

      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="font-semibold tracking-[0.3em] text-lime-400">
          OUR TRAINERS
        </p>

        <h2 className="mt-2 text-4xl font-extrabold">
          TRAIN WITH THE BEST
        </h2>

        <p className="mt-4 text-gray-400">
          Meet our experienced trainers and take your fitness journey
          to the next level.
        </p>
      </div>

      {/* Trainers */}
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="overflow-hidden rounded-2xl border border-gray-800 bg-zinc-950"
          >

            {/* Image */}
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-72 w-full object-cover"
            />

            {/* Trainer Details */}
            <div className="p-5">

              <h3 className="text-2xl font-bold">
                {trainer.name}
              </h3>

              <p className="mt-1 font-semibold text-lime-400">
                {trainer.role}
              </p>

              <p className="mt-3 text-sm text-gray-400">
                {trainer.experience}
              </p>

              <p className="mt-1 text-sm text-gray-400">
                {trainer.specialization}
              </p>

            </div>

            {/* View Profile Button */}
            <button
              type="button"
              onClick={() => openModal(trainer)}
              className="w-full bg-lime-300 p-4 text-center text-gray-700 transition hover:cursor-pointer hover:bg-lime-400 hover:text-black"
            >
              VIEW PROFILE
            </button>

          </div>
        ))}

      </div>

      {/* Trainer Modal */}
      {selectedTrainer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6"
          onClick={closeModal}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xl text-white transition hover:bg-lime-400 hover:text-black"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">

              {/* Trainer Image */}
              <div>
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  className="h-full min-h-[350px] w-full object-cover"
                />
              </div>

              {/* Trainer Details */}
              <div className="p-6 md:p-8">

                <p className="font-semibold uppercase tracking-widest text-lime-400">
                  {selectedTrainer.role}
                </p>

                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                  {selectedTrainer.name}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {selectedTrainer.experience}
                </p>

                <p className="mt-1 text-zinc-400">
                  {selectedTrainer.specialization}
                </p>

                {/* About */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-lime-400">
                    ABOUT
                  </h3>

                  <p className="mt-2 leading-relaxed text-zinc-400">
                    {selectedTrainer.about}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-lime-400">
                    SPECIALIZATIONS
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedTrainer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-lime-400">
                    CERTIFICATIONS
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                    {selectedTrainer.certifications.map(
                      (certificate, index) => (
                        <li key={index}>
                          • {certificate}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Book Session */}
                <Link
                  to="/contact"
                  onClick={closeModal}
                  className="mt-7 block w-full rounded-lg bg-lime-400 px-5 py-3 text-center font-bold text-black transition hover:bg-lime-300"
                >
                  BOOK A SESSION
                </Link>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default Trainers;
