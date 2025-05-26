import { upcomingSchedule } from "../data/upcomingSchedule"; 
import React from "react";

function UpcomingSchedule() {
    return (
      <div className="upcoming-schedule">
        <h3 className="shedule-title" style={{ color: "blue" }}> The Upcoming Schedule</h3>
        {upcomingSchedule.map((group, index) => (
          <div key={index} className="day-group" style={{ marginBottom: "24px" }}>
            <h4 className="day-title">{group.day}</h4>
  
            {/* Flex container for two cards side by side */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {group.items.map((item, index) => (
                <div
                  key={index}
                  className="appointment-card"
                  style={{
                    backgroundColor: item.color,
                    
                    borderRadius: "12px",
                    padding: "8px",
                    flex: "1 1 45%", // Each card takes 45% width
                    minWidth: "200px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
                  <div>
                    <p style={{ margin: 0, fontWeight: "bold", color: "dark blue" }}>
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>
                      {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
export default UpcomingSchedule