import {healthStatus} from '../data/healthStatus'
import React  from 'react';
import '../Styles/HealthStatusCards.css'
const HealthStatusCards = () => {
  return (
    <div className="health-status-cards" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {healthStatus.map((item, index) => (
        <div
          key={index}
          className="status-card"
          style={{
            backgroundColor: item.bgColor,
            borderRadius: "12px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
            <span style={{ fontWeight: "bold", fontSize: "1rem" }}>{item.title}</span>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.progressColor,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;