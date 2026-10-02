import React from "react";

function Pricing() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">

      {/* Heading */}
      <h2 className="text-center text-4xl font-extrabold mb-12">
        Pricing Plan
      </h2>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Starter Plan */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-7">

          <h3 className="text-2xl font-bold mb-3">
            STARTER PLAN
          </h3>

          <p className="text-gray-400 mb-8">
            A simple, affordable entry into fitness.
          </p>

          <div className="mb-8">
            <span className="text-lime-400 text-4xl font-bold">
              ₹999
            </span>
            <span className="text-gray-400">
              /month
            </span>
          </div>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li>✓ Gym access during regular hours</li>
            <li>✓ 2 group fitness classes/month</li>
            <li>✓ Basic fitness assessment</li>
            <li>✓ Workout tracking</li>
            <li>✓ Community support</li>
          </ul>

          <button className="w-full border border-white py-3 rounded-md font-bold hover:bg-white hover:text-black transition">
            GET STARTED
          </button>

        </div>


        {/* Pro Plan */}
        <div className="bg-lime-400 text-black rounded-lg p-7">

          <h3 className="text-2xl font-bold mb-3">
            PRO PLAN
          </h3>

          <p className="mb-8">
            For regular gym-goers aiming to level up.
          </p>

          <div className="mb-8">
            <span className="text-4xl font-bold">
              ₹1,999
            </span>
            <span>
              /month
            </span>
          </div>

          <ul className="space-y-4 mb-10">
            <li>✓ Unlimited gym access</li>
            <li>✓ 8 group fitness classes/month</li>
            <li>✓ Personalized workout plan</li>
            <li>✓ Progress tracking</li>
            <li>✓ Priority class booking</li>
            <li>✓ Monthly coach check-in</li>
          </ul>

          <button className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-zinc-800 transition">
            GET STARTED
          </button>

        </div>


        {/* Elite Plan */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-7">

          <h3 className="text-2xl font-bold mb-3">
            ELITE MEMBERSHIP
          </h3>

          <p className="text-gray-400 mb-8">
            All-in access for serious transformation.
          </p>

          <div className="mb-8">
            <span className="text-lime-400 text-4xl font-bold">
              ₹3,499
            </span>
            <span className="text-gray-400">
              /month
            </span>
          </div>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li>✓ Everything in Pro Plan</li>
            <li>✓ 4 personal training sessions/month</li>
            <li>✓ Nutrition guidance</li>
            <li>✓ Body composition analysis</li>
            <li>✓ Priority trainer support</li>
            <li>✓ Exclusive workshops</li>
          </ul>

          <button className="w-full border border-white py-3 rounded-md font-bold hover:bg-white hover:text-black transition">
            GET STARTED
          </button>

        </div>

      </div>

    </section>
  );
}

export default Pricing;