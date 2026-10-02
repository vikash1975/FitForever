
import React, { useState } from "react";
import { Link } from "react-router-dom";
import programs from "./program";

function AboutPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => {
    setSelectedProgram(program);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProgram(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-black px-4 py-16 md:px-8 lg:px-12">

      {/* HEADER */}
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-lime-400">
          OUR PROGRAMS
        </p>

        <h1 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
          TRAIN WITH{" "}
          <span className="text-lime-400">
            PURPOSE
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          Choose the right program for your fitness goals and
          take the next step towards becoming stronger.
        </p>
      </div>


      {/* PROGRAM CARDS */}
      <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-3">

        {programs.map((program) => (
          <div
            key={program.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-lime-400/50"
          >

            {/* IMAGE */}
            <div className="relative h-64 overflow-hidden">

              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <h2 className="absolute bottom-5 left-5 text-2xl font-black text-white">
                {program.title}
              </h2>

            </div>


            {/* CONTENT */}
            <div className="p-6">

              <p className="text-sm leading-6 text-gray-400">
                {program.shortDescription}
              </p>

              <button
                type="button"
                onClick={() => openModal(program)}
                className="mt-7 w-full rounded-xl border border-lime-400/50 px-5 py-3 text-sm font-bold tracking-wide text-lime-400 transition hover:bg-lime-400 hover:text-black"
              >
                EXPLORE PROGRAM
              </button>

            </div>
          </div>
        ))}

      </div>


      {/* PROGRAM MODAL */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
          onClick={closeModal}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/70 text-xl text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              ✕
            </button>


            {/* MODAL IMAGE */}
            <div className="relative h-64 md:h-80">

              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 md:left-8">
                <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-lime-400">
                  FITFOREVER PROGRAM
                </p>

                <h2 className="text-3xl font-black text-white md:text-4xl">
                  {selectedProgram.title}
                </h2>
              </div>

            </div>


            {/* MODAL CONTENT */}
            <div className="p-6 md:p-8">

              {/* DESCRIPTION */}
              <div>
                <h3 className="text-lg font-bold text-white">
                  ABOUT THIS PROGRAM
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {selectedProgram.description}
                </p>
              </div>


              {/* BENEFITS */}
              <div className="mt-8">

                <h3 className="text-lg font-bold text-white">
                  WHAT YOU'LL GET
                </h3>

                <div className="mt-4 grid gap-3 md:grid-cols-2">

                  {selectedProgram.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black p-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-black text-black">
                        ✓
                      </span>

                      <span className="text-sm text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}

                </div>
              </div>


              {/* TRAINING */}
              <div className="mt-8">

                <h3 className="text-lg font-bold text-white">
                  TRAINING APPROACH
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {selectedProgram.training}
                </p>

              </div>


              {/* SUITABLE FOR */}
              <div className="mt-8">

                <h3 className="text-lg font-bold text-white">
                  WHO IS IT FOR?
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {selectedProgram.suitableFor}
                </p>

              </div>


              {/* CTA */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/register"
                  onClick={closeModal}
                  className="flex-1 rounded-xl bg-lime-400 px-6 py-3.5 text-center text-sm font-bold tracking-wide text-black transition hover:bg-lime-300"
                >
                  GET STARTED
                </Link>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 rounded-xl border border-white/10 px-6 py-3.5 text-sm font-bold tracking-wide text-white transition hover:border-lime-400 hover:text-lime-400"
                >
                  CLOSE
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}

export default AboutPrograms;









