import React from 'react';
import './works.css';
import WorkClock from '../../assets/Clock.png';
import WorkConverter from '../../assets/Converter.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">Мои работы:</h2>
      <span className="worksDesc">Созданные с помощью HTML, CSS, JS и до конца оформленные.</span>
      <div className="worksImgs">
        <button className="WorksBtn" onClick={() => { document.getElementById('heroo').scrollIntoView({ behavior: 'smooth' }); }}>
          <img src={WorkClock} alt="" className="worksImg" />
        </button>
        <button className="WorksBtn" onClick={() => { document.getElementById('herooo').scrollIntoView({ behavior: 'smooth' }); }}>
          <img src={WorkConverter} alt="" className="worksImg" />
        </button>
      </div>
    </section>
  );
};

export default Works;
