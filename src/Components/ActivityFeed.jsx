import React from "react";
import '../Styles/ActivityFeed.css';

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const barHeights = [
  [60, 40, 50],
  [70, 50],
  [40, 35],
  [60, 30, 50],
  [75, 45],
  [30, 20],
  [45, 60],
];

const ActivityFeed = () => {
  return (
    <>
    
      <div className="activityCard">
        <div className="header">
          <h3>Activity</h3>
          <p>3 appointments on this week</p>
        </div>
        <div className="chart">
          {barHeights.map((heights, index) => (
            <div className="dayColumn" key={index}>
              {heights.map((height, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{ height: `${height}px` }}
                />
              ))}
              <span className="dayLabel">{days[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivityFeed;
