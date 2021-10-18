import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/logo.png";
import FirebaseSettings from "./../../Firebase/Firebase.Settings";

const SignUp = () => {
  const { GetName, GetEmail, GetPassword, SignUp, name, error } = FirebaseSettings();

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 login-container">
          <div className="bg-gray-800 px-6 py-8  rounded shadow-md text-black w-full">
            <img src={logo} alt="" className="text-center mx-auto" />
            <h1 className="mb-8 text-3xl text-white text-center">Sign up</h1>
            <input
              onChange={GetName}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />
            <input
              onChange={GetEmail}
              type="text"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={GetPassword}
              type="password"
              className="block border border-grey-light w-full p-2 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <button
            onClick={(name) => SignUp(name)}
              type="submit"
              className="w-full text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1"
            >
              Create Account
            </button>
            <br />
            {
              error? <p className="text-red-800"> ✖ {error}</p> : <p className="text-red-800"> </p>
            }
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link to="/signin">
              <span className="no-underline border-b border-blue text-blue">
                Log in
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
