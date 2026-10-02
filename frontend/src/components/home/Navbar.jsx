import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <nav className="fixed top-0 left-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="FitForever"
          className="h-15 w-15 object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">

        <Link
          to="/"
          className="text-sm font-medium text-white transition hover:text-lime-400"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-sm font-medium text-white/80 transition hover:text-lime-400"
        >
          About
        </Link>

        <Link
          to="/programs"
          className="text-sm font-medium text-white/80 transition hover:text-lime-400"
        >
          Programs
        </Link>

        <Link
          to="/pricing"
          className="text-sm font-medium text-white/80 transition hover:text-lime-400"
        >
          Pricing
        </Link>

      </div>

      {/* Join Button */}
      <Link
        to="/register"
        className="rounded-xl bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105 hover:bg-lime-300"
      >
        Join Now
      </Link>

    </nav>
  );
};

export default Navbar;