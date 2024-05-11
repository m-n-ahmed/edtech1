import React from 'react';

const TextListen = ({ textData }) => {
  const handleSpeech = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textData);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      synth.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text to speech!");
    }
  };

const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
};

  return (
    <div className="level-controls">
      <button onClick={handleSpeech} className="submit-button">Listen</button>
      <button onClick={stopSpeech} className="submit-button">Stop</button>      
    </div>
  );
};

export default TextListen;
