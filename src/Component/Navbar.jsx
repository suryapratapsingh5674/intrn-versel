import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;