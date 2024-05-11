import React, { useState } from 'react';
import { useRoutingNavigation} from '../routing/useNavigation'; // Import useHistory hook from React Router
import '../styleSheets/edtech.css'; // Adjust the path according to your project structure

import InstructionalComponents from './InstructionalComponents'; // Make sure to import the Curriculum component
import InstructionalPlans from './InstructionalPlans'; // Make sure to import the Curriculum component
import Resources from './Resources'; // Display of first resource
import Resource1 from '../App_1'; // Display of first resource


function Instruction() {

    const { handleRouting } = useRoutingNavigation();

    const [currentView, setCurrentView] = useState('Instruction');
    const handleView = (viewName) => {
      setCurrentView(viewName);
    };

    
    return (
      <div className="container">
        <h1>Instruction Management</h1>
        {currentView === 'Instruction' && (
        <>
        <button className="button" onClick={() => handleView('InstructionalComponents')}>Instructional Components</button>
        <button className="button" onClick={() => handleView('InstructionalPlans')}>Instructional Plans</button>
        {/* Buttons for Strategies and Venues */}
        <button className="button" onClick={handleRouting('/learning')}>Return to Learning Process</button>
        </>
        )}

        {currentView === 'InstructionalComponents' && <InstructionalComponents handleView={handleView} />}
        {currentView === 'InstructionalPlans' && <InstructionalPlans handleView={handleView} />}
        {currentView === 'Resources' && <Resources handleView={handleView} />}
        {currentView === 'Resource1' && <Resource1 handleView={handleView} />}
      </div>
    );
  }

  export default Instruction;