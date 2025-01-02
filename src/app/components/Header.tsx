"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { useMediaQuery } from "@/app/Hooks/QueryHeader";

const Header: React.FC = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const submenuRef = useRef<HTMLUListElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleSubmenu = () => {
    setIsSubmenuOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeSubmenu = (e: MouseEvent) => {
    if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSubmenu);
    return () => {
      document.removeEventListener("mousedown", closeSubmenu);
    };
  }, []);

  return (
    <header className="sticky top-0 h-[70px] w-full bg-white flex items-center justify-between px-4 shadow-md z-50">
      <div>
        <Link href={"/"}>
          <img src="/logo.jpg" alt="Logo" className="h-12" />
        </Link>
      </div>

      {isMobile ? (
        <>
          <button
            onClick={toggleMobileMenu}
            className="z-50 relative w-10 h-10 text-gray-700 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute left-1/2 top-1/2 block w-5 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
          <nav
            className={`absolute top-[70px] left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform z-50 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link href={"/"}>
                  <span className="text-gray-700 hover:text-blue-600 block py-2">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleSubmenu}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center justify-between w-full py-2"
                >
                  Optimization Tools
                  <FiChevronDown
                    className={`ml-2 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isSubmenuOpen && (
                  <ul className="pl-4 mt-2 space-y-2 z-50">
                    <li>
                      <Link href={"/html-minify"}>
                        <span className="block py-2 text-gray-700 hover:text-blue-600">
                          HTML Minify
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/javascrpit-css-compresser"}>
                        <span className="block py-2 text-gray-700 hover:text-blue-600">
                          JavaScript Minify
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/image-optimizer"}>
                        <span className="block py-2 text-gray-700 hover:text-blue-600">
                          Image Optimizer
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/json-formatter"}>
                        <span className="block py-2 text-gray-700 hover:text-blue-600">
                          JSON Formatter
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/encode-to-base64"}>
                        <span className="block py-2 text-gray-700 hover:text-blue-600">
                          Encode To Base64
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/text-to-speech">
                  <span className="text-gray-700 hover:text-blue-600 block py-2">
                    Text To Speech
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link href={"/"}>
                <span className="text-gray-700 hover:text-blue-600">Home</span>
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleSubmenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center"
              >
                Optimization Tools
                <FiChevronDown
                  className={`ml-2 transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isSubmenuOpen && (
                <ul
                  ref={submenuRef}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50"
                >
                  <li>
                    <Link href={"/html-minify"}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
                        HTML Minify
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/javascrpit-css-compresser"}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
                        JavaScript Minify
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/image-optimizer"}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
                        Image Optimizer
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/json-formatter"}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
                        JSON Formatter
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/encode-to-base64"}>
                      <span className="block px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
                        Encode To Base64
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/text-to-speech">
                <span className="text-gray-700 hover:text-blue-600">
                  Text To Speech
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden md:block relative">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <FiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
      </div>
    </header>
  );
};

export default Header;
