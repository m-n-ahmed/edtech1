// TextGet.js
import React, { useState, useEffect } from 'react';
import TextDisplay from './TextDisplay';
import TextListen from './TextListen';

const TextGet = ({ currentTextFile }) => {
  const [textData, setTextData] = useState('');

  useEffect(() => {
    if (currentTextFile) {
      fetch(currentTextFile)
        .then(response => response.text())
        .then(data => setTextData(data))
        .catch(error => console.error("Failed to load text data", error));
    }
  }, [currentTextFile]);

  return (
    <div>
      <TextDisplay textData={textData} />
      <TextListen textData={textData} />
    </div>
  );
};

export default TextGet;
