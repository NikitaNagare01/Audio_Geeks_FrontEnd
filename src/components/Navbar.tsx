"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    // alert()
    const tk: string | null = localStorage.getItem("token");

    setToken(tk);
  }, []);


  const state = useSelector((state:any)=>state.loggedinstate.islogin)
  const role = useSelector((state:any) =>state.rolestate.role) 







  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" text-lg font-semibold">
            <a href="#" className="hover:text-gray-400">
              Brand
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/",
              })}
            >
              Home
            </Link>
            <Link
              href="about"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/about",
              })}
            >
              About
            </Link>
            {state || token ? (
              <div>
              
              <Link
              href="profile"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/profile",
              })}
              >
              Profile
              </Link>
            </div>
            ) : (
              <div>
              <Link
                href="login"
                className={clsx(" hover:text-white", {
                  "hover:text-white font-bold": path === "/login",
                })}
              >
              Login
              </Link>
              
              </div>
            )}
            {state || token ?(<div></div>):(
              <Link
              href="register"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/register",
              })}
            >
              Register
            </Link>
            )}

            
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pt-2 pb-3 bg-gray-700">
            <Link
              href="/"
              className={clsx("block hover:text-white", {
                "hover:text-white font-bold": path === "/",
              })}
            >
              Home
            </Link>
            <Link
              href="about"
              className={clsx("block hover:text-white", {
                "block hover:text-white font-bold": path === "/about",
              })}
            >
              About
            </Link>
            {state || token ? (
              <div>
              <Link
              href="profile"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/profile",
              })}
              >
              Profile
              </Link>
            </div>
            ) : (
              <div>
              <Link
                href="login"
                className={clsx(" hover:text-white", {
                  "hover:text-white font-bold": path === "/login",
                })}
              >
              Login
              </Link>
              </div>
            )}
            {state || token ?(<div></div>):(
              <Link
              href="register"
              className={clsx(" hover:text-white", {
                "hover:text-white font-bold": path === "/register",
              })}
            >
              Register
            </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
