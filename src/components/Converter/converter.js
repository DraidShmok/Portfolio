// /src/components/VoiceConverter/VoiceConverter.js
import React, { useState, useEffect } from 'react';
import './converter.css';

const VoiceConverter = () => {
  const [speech, setSpeech] = useState(new SpeechSynthesisUtterance());
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(0);

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      setSpeech((prevSpeech) => {
        const newSpeech = new SpeechSynthesisUtterance(prevSpeech.text);
        newSpeech.voice = availableVoices[selectedVoice];
        return newSpeech;
      });
    };

    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [selectedVoice]);

  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value);
  };

  const handleListen = () => {
    const text = document.querySelector('textarea').value;
    setSpeech((prevSpeech) => {
      const newSpeech = new SpeechSynthesisUtterance(text);
      newSpeech.voice = voices[selectedVoice];
      return newSpeech;
    });
    window.speechSynthesis.speak(speech);
  };

  return (
    <div id='herooo' className="hero">
      <h1>Text to Speech <span>Converter</span></h1>
      <textarea placeholder="Write anything here..."></textarea>
      <div className="row">
        <select onChange={handleVoiceChange} value={selectedVoice}>
          {voices.map((voice, index) => (
            <option key={index} value={index}>{voice.name}</option>
          ))}
        </select>
        <button onClick={handleListen}>Listen</button>
      </div>
    </div>
  );
};

export default VoiceConverter;
