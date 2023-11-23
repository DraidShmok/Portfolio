import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">

        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</ScrollLink>
            <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-48} duration={500} className="desktopMenuListItem">About</ScrollLink>
            <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-45} duration={500} className="desktopMenuListItem">Portfolio</ScrollLink>
            <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-15} duration={500} className="desktopMenuListItem">Contact</ScrollLink>
        </div>

        <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</ScrollLink>
            <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</ScrollLink>
            <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</ScrollLink>
            <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-69} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</ScrollLink>
        </div>

    </nav>
  )
}

export default Navbar