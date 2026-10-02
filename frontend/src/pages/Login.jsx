// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// function Login() {
//     const dispatch=useDispatch();
//     const {loading,error,}=useSelector((state)=>state.auth);
//     const [formData,setFormData]=useState({email:"",password:""});
//     const [showPassword,setShowPassword]=useState(false);

//     const [errors,setErrors]=useState({})
//   return (
//     <div>

//     </div>
//   )
// }

// export default Login

















import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../redux/authSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      dispatch(clearError());
    }
  };

  // Handle login
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    toast.error("Please fill all fields");
    return;
  }

  // Submit karte hi form empty
  setFormData({
    email: "",
    password: "",
  });

  // Backend request
  const result = await dispatch(loginUser(formData));

  if (loginUser.fulfilled.match(result)) {
    toast.success(result.payload.message);
  }

  if (loginUser.rejected.match(result)) {
    toast.error(result.payload);
  }
};

  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white">

      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">

        <div className="w-full rounded-2xl border border-white/10 bg-zinc-950 p-8 shadow-2xl">

          {/* Top Line */}
          <div className="mb-8 h-1 w-16 rounded-full bg-lime-500"></div>

          {/* Heading */}
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-lime-500">
              FitForever
            </p>

            <h1 className="text-4xl font-bold">
              Welcome Back<span className="text-lime-500">.</span>
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Login to continue your fitness journey.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black
                  px-4 py-3
                  text-white
                  outline-none
                  placeholder:text-gray-600
                  focus:border-lime-500
                  focus:ring-2
                  focus:ring-lime-500/20
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Password
              </label>

              <div className="relative">

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-black
                    px-4 py-3 pr-20
                    text-white
                    outline-none
                    placeholder:text-gray-600
                    focus:border-lime-500
                    focus:ring-2
                    focus:ring-lime-500/20
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-xs
                    font-semibold
                    text-lime-500
                    hover:text-lime-400
                  "
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>

              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                mt-3
                w-full
                rounded-xl
                bg-lime-500
                px-6 py-3.5
                font-bold
                text-black
                transition
                hover:bg-lime-400
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "LOGGING IN..." : "LOGIN"}
            </button>

          </form>

          {/* Register Link */}
          <p className="mt-7 text-center text-sm text-gray-500">
            Don't have an account?{" "}

            <Link to="/register"
              className="font-semibold text-lime-500 hover:text-lime-400"
            >
              Join FitForever
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;

