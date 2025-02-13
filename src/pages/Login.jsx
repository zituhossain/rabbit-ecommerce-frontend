import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
          <p className="text-center mb-6">
            Enter your username and password to login
          </p>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-200 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white p-2 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="Login"
            className="w-full h-[750px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
