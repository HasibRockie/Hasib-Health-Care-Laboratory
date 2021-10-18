import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "../../Components/Header/logo.png";
import useAuth from "../../Context/useAuth";
import { useHistory, useLocation } from "react-router";

const SignIn = () => {
  const {
    name,
    GetEmail,
    GetPassword,
    SignIn,
    GoogleSignIn,
    GithubSignIn,
    setUser,
    setName,
    setEmail,
    setError,
    setLoggedIn,
    setLoading,
    error,
  } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/"; 
 

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        history.push(redirect_uri); 

        setUser(result.user);
        setEmail(result.user?.email);
        setName(result.user?.displayName);
        setLoggedIn(true);
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        // const credential = GoogleAuthProvider.credentialFromError(error);

        setError(error?.message);
      })
      .finally(setLoading(false));
  };

  const handleGithubSignIn = () => {
    GithubSignIn()
    .then((result) => {
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      history.push(redirect_uri)

      setUser(result.user);
      setEmail(result.user?.email);
      setName(result.user?.displayName);
      setLoggedIn(true);
      setError('')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // const credential = GithubAuthProvider.credentialFromError(error);
      setError(errorMessage);
    })
    .finally(setLoading(false)) 
  };



  const handleSignIn = () => {
    SignIn()
    .then((userCredential) => {
      history.push(redirect_uri)
      setUser(userCredential.user);
      setEmail(userCredential.user?.email);
      setName(userCredential.user?.displayName);
      setLoggedIn(true);
      setError('')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    })
    .finally(setLoading(false))
  };



  return (
    <div className="mt-5 mb-5">
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2 login-container">
          <div className="bg-gray-800 px-6 py-8 rounded shadow-md text-black w-full">
            <img src={logo} alt="" className="text-center mx-auto" />
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
              onClick={handleSignIn}
              type="submit"
              className="w-full text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1"
            >
              Log in
            </button>
            <p className="text-red-300"> {error}</p>

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
                onClick={handleGoogleSignIn}
                className="w-50 text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1 mx-2"
              >
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
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
