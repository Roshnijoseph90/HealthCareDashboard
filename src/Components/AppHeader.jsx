
import React from 'react';
import '../Styles/AppHeader.css';
//import userPic from '../assets/userPic.png';
import { FiSearch } from 'react-icons/fi'; // Search icon
const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="searchbar">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <div className="headericon">
        <button className="icon-btn">🔔</button>
        <img src="userPic.png" alt="User" className="avatar" />
        <button className="add-btn">+ Add</button>
      </div>
    </header>
  );
};

export default AppHeader;
