import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Чем занимаюсь?</span>
        <span className="skillDesc">В скором времени планирую начать разработку собственной нейронной сети. Уже есть идея)</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Design</h2>
                    <p>Изучал и продолжаю изучать такие программы как: Adobe Photoshop, Figma.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Frontend</h2>
                    <p>HTML, CSS, JavaScript, React. Не предел, в планах идти дальше семимильными шагами.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend</h2>
                    <p>Также имею опыт разработки на PHP и работы с MySQL</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills