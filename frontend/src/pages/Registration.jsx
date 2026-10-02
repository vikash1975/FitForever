
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputField from "../components/common/InputField";
import { Validation } from "../validations/Validations";
import { toast } from "react-toastify";
import {
  clearError,
  clearRegisterSuccess,
  registerUser,
} from "../redux/authSlice";
import { Link } from "react-router-dom";

function Registration() {
  const dispatch = useDispatch();

  const { loading, error, registerSuccess } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (error) {
      dispatch(clearError());
    }

  
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationError = Validation(formData);

  setErrors(validationError);

  // Frontend validation fail
  if (Object.keys(validationError).length > 0) {
    return;
  }

  // Backend request
  const result = await dispatch(registerUser(formData));

  // Backend success
  if (registerUser.fulfilled.match(result)) {
    toast.success(result.payload.message);

    // Form clear
    setFormData({
      name: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});
  }

  // Backend error
  if (registerUser.rejected.match(result)) {
    toast.error(result.payload);
  }
};


  return (
    <div className="min-h-screen bg-black px-4 py-12 text-white">

      {/* Main Container */}
      <div className="mx-auto w-full max-w-lg">

        {/* Heading */}
        <div className="mb-8 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-lime-500">
            FitForever
          </p>

          <h1 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Join The
            <span className="ml-2 text-lime-500">
              Movement
            </span>
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            Start your fitness journey with FitForever.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8">

          {/* Top Accent */}
          {/* <div className="mb-7 h-1 w-16 rounded-full bg-lime-500" /> */}
          
          <div className="mb-7 h-px w-full bg-gradient-to-r from-lime-500 via-lime-500/40 to-transparent" />
          <h2 className="mb-1 text-xl font-semibold">
            Create Account
          </h2>

          <p className="mb-7 text-sm text-zinc-500">
            Enter your details to get started.
          </p>

          {/* Backend Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Success */}
          {/* {registerSuccess && (
            <div className="mb-5 rounded-lg border border-lime-500/30 bg-lime-500/10 px-4 py-3 text-sm text-lime-400 text-center">
              Registration successful! You can now login.
            </div>
          )} */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <InputField
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            {/* Email */}
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Number */}
            <InputField
              label="Contact Number"
              name="number"
              type="tel"
              placeholder="Enter your contact number"
              value={formData.number}
              onChange={handleChange}
              error={errors.number}
            />

            {/* Password */}
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-lime-500 px-5 py-3.5 font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-400 hover:shadow-[0_0_25px_rgba(132,204,22,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}

              {!loading && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </button>
          </form>

          {/* Login */}
          <div className="mt-7 border-t border-zinc-800 pt-6 text-center">
            <p className="text-sm text-zinc-500">
              Already have an account?
            </p>

            <Link to="/login"
              
              className="mt-1 inline-block font-semibold text-lime-500 transition-colors hover:text-lime-400"
            >
              Login to your account
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs uppercase tracking-widest text-zinc-400">
          Train Hard • Stay Consistent • Become Stronger
        </p>

      </div>
    </div>
  );
}

export default Registration;










