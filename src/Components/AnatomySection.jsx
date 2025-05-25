import React from 'react';
import '../Styles/AnatomySection.css';
import anatomyImg from '../Assets/humananatomy.png';

const AnatomySection = () => {
  return (
    <div className="anatomyCard">
      <img src={anatomyImg} alt="Anatomy Illustration" className="anatomyImage" />

      <div className="label heart">
        ❤️ Healthy Heart
      </div>

      <div className="label leg">
        🦿 Healthy Leg
      </div>
      <div className="label teeth">🦷 Teeth</div>
      <div className="label lungs">🫁 Lungs</div>
      <div className="label bone">🦴 Bone</div>
    </div>
  );
};

export default AnatomySection;
