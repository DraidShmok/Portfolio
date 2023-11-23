import React, { useRef } from 'react';
import './contact.css';
import LogoTelegram from '../../assets/LogoTelegram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email...");

    emailjs.sendForm('service_4tx31mm', 'template_06tz4bm', form.current, 'bIAlQN7oatVtAZ21K')
      .then((result) => {
        console.log("Email sent successfully:", result.text);
      }, (error) => {
        console.log("Email sending failed:", error.text);
      });
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Форма работает через EmailJS. Пожалуйста, напишите мне </span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name' />
          <input type="email" className="email" placeholder='Your Email' name='from_email' />
          <textarea className="msg" name='message' rows="5" placeholder='Your message'></textarea>
          <button type='submit' value='Send' className="submitBtn">Submit</button>
          <div className="links">
            <a href="https://t.me/Iiflya" target="_blank" rel="noopener noreferrer">
              <img src={LogoTelegram} alt="Telegram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
