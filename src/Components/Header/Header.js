import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, user, email, name, SignOut } = useAuth();
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-between space-x-40 items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img className="h-12" src={logo} alt="Workflow" />{" "}
                </Link>
              </div>
              <div className="hidden flex  md:flex">
                <div className="ml-10 flex items-baseline space-x-7">
                  <Link to="/">
                    <span className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </span>{" "}
                  </Link>

                  <Link to="/team">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Team
                    </span>{" "}
                  </Link>

                  <Link to="/services">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Services
                    </span>{" "}
                  </Link>

                  <Link to="/blogs">
                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Blogs
                    </span>{" "}
                  </Link>

                  {loggedIn ? (
                    <div className="flex space-between">
                      <span className="text-red-300 font-semibold">
                        {user.displayName || name || email}
                      </span> &ensp; 
                      <button
                        onClick={SignOut}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {" "}
                        Logout{" "}
                      </button>
                    </div>
                  ) : (
                    <Link to="/signin">
                      <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Register/Login
                      </span>{" "}
                    </Link>
                  )}
                </div>
              </div>

              <div className="ml-10 flex user-profile items-baseline space-x-2"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/">
                <span className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </span>{" "}
              </Link>
              <Link to="/team">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Team
                </span>{" "}
              </Link>

              <Link to="/services">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Services
                </span>{" "}
              </Link>

              <Link to="/blogs">
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blogs
                </span>{" "}
              </Link>

              {loggedIn ? (
                <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  <span className="user">
                    {name || user.displayName || email}{" "}
                  </span>

                  <button
                    onClick={SignOut}
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {" "}
                    Logout{" "}
                  </button>
                </span>
              ) : (
                <Link to="/signin">
                  <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Register/Login
                  </span>{" "}
                </Link>
              )}
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
