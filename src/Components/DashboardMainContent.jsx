import React from 'react';
import AnatomySection from './AnatomySection';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalenderView';
import '../Styles/DashboardMainContent.css';
import UpcomingSchedule from '../Components/UpcomingSchedule';
import HealthStatusCards from '../Components/HealthStatusCards';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main-content">
      <div className="left-column">
        <div className="anatomy-status-wrapper">
          <AnatomySection />
          <HealthStatusCards/>
        </div>
        
        <ActivityFeed />
      </div>

      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
