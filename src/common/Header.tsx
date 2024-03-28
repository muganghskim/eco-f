import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../utill/DarkModeToggle';

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 shadow-lg dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EcoMission</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-green-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-200">About</Link>
            </li>
            <li>
              <Link to="/missions" className="hover:text-green-200">Missions</Link>
            </li>
            <li>
              <Link to="/rewards" className="hover:text-green-200">Rewards</Link>
            </li>

          </ul>
        </nav>
        <div>
          <Link to="/login" className="px-4 py-2 bg-green-700 hover:bg-green-600 rounded text-white shadow">Login</Link>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;