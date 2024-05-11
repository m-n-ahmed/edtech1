
import React, { useState } from 'react';

function InstructionalComponents({ handleView }) {

    return (
      <div className="container">
        <button className="button" onClick={() => handleView('Resources')}>Resources</button>
        <button className="button">Strategies</button>
        <button className="button">Venues</button>
        <button className="button">Equipment</button>
        {/* Buttons for Strategies and Venues */}
        <button className="button" onClick={() => handleView('Instruction')}>Return</button>
      </div>
    );
  }

  export default InstructionalComponents;