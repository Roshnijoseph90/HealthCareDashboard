import React from 'react';
import AppHeader from './Components/AppHeader';
import Sidebar from './Components/Sidebar';
import DashboardMainContent from './Components/DashboardMainContent';

const App = () => {
  return (
    <div className="appContainer">
      <Sidebar />
      <div className="mainContent">
        <AppHeader />
        <div className="centerContent">
          <DashboardMainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
