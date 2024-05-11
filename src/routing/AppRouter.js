// src/routing/AppRouter.js or a similar path
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AccessManager from '../components/AccessManager';
// import LearningSystem from '../components/LearningSystem';
// import Learning from '../components/Learning';
// import Curriculum from '../components/Curriculum';
import Instruction from '../components/Instruction';
// import Assessment from '../components/Assessment';
// import Environment from '../components/Environment';
// import Learner from '../components/Learner';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Instruction />} />
{/*
    <Route path="/learning-system" element={<LearningSystem />} />
    <Route path="/learning" element={<Learning />} />
    <Route path="/learning/Curriculum" element={<Curriculum />} />
    <Route path="/learning/Instruction" element={<Instruction />} />
    <Route path="/learning/Assessment" element={<Assessment />} />
    <Route path="/learning/Environment" element={<Environment />} />

    <Route path="/learner" element={<Learner />} />    
*/}

  </Routes>
);

export default AppRouter;
