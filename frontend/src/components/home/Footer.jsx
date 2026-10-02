import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo / About */}
          <div>
            <h2 className="text-3xl font-extrabold italic">
              <span className="text-lime-400">FIT</span>FOREVER
            </h2>

            <p className="text-gray-400 mt-5 leading-7 max-w-xs">
              We believe fitness is more than just sets.
              It's about building confidence and becoming
              a stronger version of yourself.
            </p>
          </div>


          {/* Plan */}
          <div>
            <h3 className="text-lime-400 font-bold text-lg mb-5">
              PLAN
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>About Us</li>
              <li>Programs</li>
              <li>Pricing</li>
              <li>Trainers</li>
              <li>Contact</li>
            </ul>
          </div>


          {/* Utility */}
          <div>
            <h3 className="text-lime-400 font-bold text-lg mb-5">
              UTILITY
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund Policy</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-lime-400 font-bold text-lg mb-5">
              CONTACT
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>📞 +91 98765 43210</p>

              <p>✉️ hello@fitforever.com</p>

              <p>
                📍 Sector 45, Gurgaon,
                <br />
                Haryana 122003
              </p>
            </div>
          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-zinc-800 mt-14 pt-7">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-500 text-sm text-center md:text-left">
              Copyright © 2026 FitForever. All rights reserved.
            </p>


            {/* Social Links */}
            <div className="flex gap-3">

              <button className="w-10 h-10 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition">
                f
              </button>

              <button className="w-10 h-10 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition">
                ◎
              </button>

              <button className="w-10 h-10 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition">
                𝕏
              </button>

              <button className="w-10 h-10 border border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition">
                ▶
              </button>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;