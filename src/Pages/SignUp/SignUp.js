import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/logo.png";
import useAuth from "../../Context/useAuth";
import { useHistory } from 'react-router';
import { useLocation } from 'react-router';

const SignUp = () => {
  const {
    name,
    email,
    error,
    GetName,
    GetEmail,
    GetPassword,
    SignIn,
    SignUp,
    GoogleSignIn,
    GithubSignIn,
    setUser,
    setName,
    setEmail,
    setError,
    setLoggedIn,
    setLoading,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";

  const handleSignUp = () => {
    SignUp(name)
    .then((userCredential) => {
      history.push(redirect_uri)
      setUser(userCredential.user);
      setName(name);
      setLoggedIn(true);
      setEmail(email); 
      setError('')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
      console.log(errorMessage); 
    })
    .finally(setLoading(false))
  }

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
            onClick={handleSignUp}
              type="submit"
              className="w-full text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1"
            >
              Create Account
            </button>
            <br />
            {
              error? <p className="text-red-300"> ✖ {error}</p> : <p className="text-red-800"> </p>
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
