import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Header/logo.png";

const Footer = () => {
  return (
    <div className="pt-2 footer bg-gray-800">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link to="/">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Home
                        </span>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to="/services">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Services
                        </span>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to="/team">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Team{" "}
                        </span>
                      </Link>
                    </li>

                    <li className="mt-6">
                      <Link to="/blogs">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Blogs
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li className="mt-6">
                      <Link to="/signin">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Sign in
                        </span>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to="/signup">
                        {" "}
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Sign Up
                        </span>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to="/home">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Social Media
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <Link to="/">
                        {" "}
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Privacy policy
                        </span>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link to="/">
                        <span className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white-800 dark:text-white-50">
                          Terms of service
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6">
                    <Link to="/">
                      <div className="text-white-800 dark:text-white-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                        <svg
                          className="footer-icon feather text-white feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </Link>
                    <Link to="/">
                      <div className="pl-4">
                        <svg
                          className="footer-icon feather feather-twitter text-white-800 dark:text-white-50 cursor-pointer hover:text-brand dark:hover:text-brand "
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <Link to="/">
            <span>
              <img src={logo} alt="" />
            </span>
          </Link>
          <p className="mt-6 text-xs lg:text-sm leading-none text-white-900 dark:text-white-50">
            2021 © Hasib Health Care & Laboratory. <br /> All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
