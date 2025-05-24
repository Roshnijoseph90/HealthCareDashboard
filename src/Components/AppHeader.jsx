// src/components/Header/Header.jsx
import React from 'react';
import '../Styles/AppHeader.css'; // Or use CSS modules
import userPic from '../assets/userPic.png';

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="headerHeathCare">
        <h1 className="logo">HealthCare</h1>
      </div>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
      </div>

      <div className="headericon">
        <button className="icon-btn">
          🔔
        </button>
        <img
          src={userPic}
          alt="Userimage"
          className="avatar"
        />
        <button className="add-btn">
          + Add
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
