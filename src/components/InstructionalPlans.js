import React, {useState} from 'react';

function InstructionalPlans({ handleView }) {

    return (
      <div className="container">
        <h2>Instruction Management</h2>
        <button className="button" onClick={() => handleView('TermPlans')}>Term Plans</button>
        <button className="button" onClick={() => handleView('UnitPlans')}>Unit Plans</button>        
        <button className="button" onClick={() => handleView('LessonPlans')}>Lesson Plans</button>
        <button className="button" onClick={() => handleView('PBLPlans')}>Project Based Learning Plans</button>        
        {/* Buttons for Strategies and Venues */}
        <button className="button" onClick={() => handleView('Instruction')}>Return to Instruction</button>        
      </div>
    );
  }

  export default InstructionalPlans;