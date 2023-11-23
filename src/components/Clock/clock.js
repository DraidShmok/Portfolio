import React, { useState, useEffect } from 'react';
import './clock.css'; 

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div id='heroo' className="hero">
      <div className="container">
        <div className="clock">
          <span id="hrs">{hours}</span>
          <span>:</span>
          <span id="min">{minutes}</span>
          <span>:</span>
          <span id="sec">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
