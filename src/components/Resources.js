import React from 'react';

function Resources({ handleView }) {

    return (
      <div className="container">
        <h2>Resources</h2>
        <button className="button" onClick={() => handleView('Resource1')}>Resource 1</button>
        <button className="button">Resource 2</button>
        <button className="button">Resource 3</button>
        {/* Buttons for Strategies and Venues */}
        <button className="button" onClick={() => handleView('InstructionalComponents')}>Return</button>
      </div>
    );
  }

  export default Resources;