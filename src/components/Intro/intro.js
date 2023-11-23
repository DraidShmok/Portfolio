import React from 'react';
import './intro.css';
import bg from '../../assets/face1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Приветствую!</span>
            <span className="introText">Меня зовут <span className="introName">Илья</span> <br />Web-разработчик.</span>
            <p className="introPara">Я начинающий специалист, имеющий<br/>Огромное желание развиваться в этом направлении.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>          
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro