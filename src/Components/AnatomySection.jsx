import React from 'react';
import '../Styles/AnatomySection.css';
import anatomyImg from '../Assets/humananatomy.png';

const AnatomySection = () => {
  return (
    <div className="anatomyWrapper">
      <h2 className="dashboardTitle">Dashboard</h2>

      <div className="anatomyCard">
        <img src={anatomyImg} alt="Anatomy Illustration" className="anatomyImage" />

        <div className="label heart">❤️ Healthy Heart</div>
        <div className="label leg">🦿 Healthy Leg</div>
      </div>
    </div>
  );
};

export default AnatomySection;
