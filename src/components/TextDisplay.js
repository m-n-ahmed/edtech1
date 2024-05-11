import React, { useState, useEffect } from 'react';

const TextDisplay = ({ textData }) => {
    return (
    <pre className="text-data">
      <h3 style={{color: "white", fontSize:"20px"}}>Text</h3>
      {textData.split(/\. |\n/).map((sentence, index) => (
        <span key={index} className={index % 2 === 0 ? "line-even" : "line-odd"}>
          {`${index+1}: ${sentence.trim()}`}.{/* Re-add the full stop removed by split */}
          <br />
        </span>
      ))}
    </pre>
  );
};

export default TextDisplay;
