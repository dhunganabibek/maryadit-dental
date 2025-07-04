import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white px-6 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Maryadit Dental Clinic</div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`lg:flex space-x-8 text-lg ${
            menuOpen
              ? "block absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 p-4 z-50"
              : "hidden"
          } lg:static lg:block`}
        >
          <a href="#home" className="block py-2 hover:text-yellow-400">
            Home
          </a>
          <a href="#services" className="block py-2 hover:text-yellow-400">
            Services
          </a>
          <a href="#contact" className="block py-2 hover:text-yellow-400">
            Contact Info
          </a>
          <a href="#community" className="block py-2 hover:text-yellow-400">
            Community Activities
          </a>
          <a href="#team" className="block py-2 hover:text-yellow-400">
            Meet the Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
