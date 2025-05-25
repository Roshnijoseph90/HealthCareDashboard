import React from 'react';
import AppHeader from './Components/AppHeader';
import Sidebar from './Components/Sidebar';
import AnatomySection from './Components/AnatomySection';

const App = () => {
  return (
    <div className="appContainer">
      <Sidebar />
      <div className="mainContent">
        <AppHeader />
        <div className="centerContent">
          <AnatomySection />
        </div>
      </div>
    </div>
  );
};

export default App;
