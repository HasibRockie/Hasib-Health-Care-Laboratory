import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from '../../Components/Header/logo.png'
import FirebaseSettings from './../../Firebase/Firebase.Settings';

const SignIn = () => {
  const {GetEmail, GetPassword, SignIn, GoogleSignIn, GithubSignIn} = FirebaseSettings()
  return (
    <div className="mt-5 mb-5">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 login-container">
          <div className="bg-gray-800 px-6 py-8 rounded shadow-md text-black w-full">
              <img src={logo} alt=""  className="text-center mx-auto" />
            <h1 className="mb-8 text-3xl text-white text-center">Sign in </h1>
            
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
              onClick={SignIn}
              type="submit"
              className="w-full text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1"
            >
              Log in 
            </button>
           
          
          <div className="text-white mt-6">
            Have no account?
            <Link to="/signup">
              <span className="no-underline border-b border-blue text-white">
                Sign up 
              </span>
            </Link>
          </div>
          <br />
          <hr />
            <h6 className="text-left text-white mx-4 mt-5">Log in with</h6>
          <div className="text-grey-dark flex space-around mx-1 mt-6">
          <button
              onClick={GoogleSignIn}
              className="w-50 text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1 mx-2"
            >
              Google
            </button>
          <button
              onClick={GithubSignIn}
              className="w-50 text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1 mx-2"
            >
              Github 
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
