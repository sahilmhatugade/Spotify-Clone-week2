import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";

const Navbar = ({ onSearch }) => {
  const { user, logout } = useContext(AuthContext);
  const [keyword, setKeyword] = useState("");

  const handleSearchClick = () => {
    if (keyword.trim() && onSearch) {
      onSearch(keyword);
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-900 p-4 shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-grow mx-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for music"
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 ease-in-out"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            onClick={handleSearchClick}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-400 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 17a6 6 0 1110 0 6 6 0 01-10 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Section: User Info or Auth Links */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative group">
            {/* Profile Picture */}
            <img
              src="https://via.placeholder.com/150/000000/FFFFFF?text=P" // Replace with a black profile image
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-green-500"
            />

            {/* Dropdown Menu (Visible on hover) */}
            <div className="absolute top-full right-0 mt-2 bg-black bg-opacity-70 text-white rounded-md shadow-md w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="space-y-2 p-2 text-center">
                <button
                  onClick={logout}
                  className="w-full px-4 py-2 bg-red-500 rounded-md hover:bg-red-400 transition duration-300"
                >
                  Logout
                </button>
                <button
                  onClick={() => console.log('Your Account clicked')}
                  className="w-full px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Your Account
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Link to="/signup">
              <button className="px-4 py-2 bg-transparent text-green-500 border border-green-500 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
                Sign up
              </button>
            </Link>
            <Link to="/signin">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition duration-300">
                Log in
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
