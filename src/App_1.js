import React, { useState, useEffect } from 'react';
import './styleSheets/quizStyles.css'; // Adjust the path according to your project structure
//import ListenText from './components/ListenText'; // Adjust the path as necessary
// import TextDisplay from './components/TextDisplay'; // Adjust the path as necessary
import TextGet from './components/TextGet'; // Adjust the path as necessary

function QuizApp() {
  const [questions, setQuestions] = useState([]); // To store questions
  const [answers, setAnswers] = useState({}); // To store user's answers
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // To store incorrect answers after submission
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
    
  const [levelData, setLevelData] = useState({
    currentLevel: 1,
    currentTextFile: '',
    currentTaskFile: '',
  });
  const [levelsMapping, setLevelsMapping] = useState([]);

  // Fetch levels mapping data
  useEffect(() => {
    fetch('/jsonData/learningLevels.json')
      .then(response => response.json())
      .then(data => setLevelsMapping(data))
      .catch(error => console.error("Failed to load levels data", error));
  }, []);

  // Update level data based on currentLevel
  useEffect(() => {
    const currentLevelData = levelsMapping.find(level => level.level === levelData.currentLevel);
    if (currentLevelData) {
      setLevelData(prevState => ({
        ...prevState,
        currentTextFile: currentLevelData.text,
        currentTaskFile: currentLevelData.task,
      }));
    }
  }, [levelData.currentLevel, levelsMapping]);

  const handleNextLevel = () => {
    setLevelData(prevState => ({
      ...prevState,
      currentLevel: Math.min(prevState.currentLevel + 1, levelsMapping.length),
    }));
  };

  const handlePreviousLevel = () => {
    setLevelData(prevState => ({
      ...prevState,
      currentLevel: Math.max(prevState.currentLevel - 1, 1),
    }));
  };

      // Fetching MCQs (Assuming you've implemented this part)
  useEffect(() => {
    if (levelData.currentTaskFile) {    
      fetch(levelData.currentTaskFile)
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Failed to load questions", error));
    }
  }, [levelData.currentTaskFile]);

    const handleOptionChange = (questionIndex, selectedOption) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption,
    });
    console.log(answers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const incorrect = questions.filter((question, index) => question.A !== answers[index]);
    setIncorrectAnswers(incorrect);
  };


  return (
    <>
    <div className="level-controls">
      {/* Display the text data and questions here */}
      <button onClick={handlePreviousLevel} className="submit-button">Previous Level</button>
      <button onClick={handleNextLevel} className="submit-button">Next Level</button>
      <h2>Level {levelData.currentLevel}</h2>
    </div>

    <TextGet currentTextFile={levelData.currentTextFile} />

  <div className="quiz-container">
  <h3 style={{color: "blue  ", fontSize:"20px"}}>Task (MCQ)</h3>
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <p>{question['Q-n']}: {question.Q}</p>
          {['a', 'b', 'c', 'd'].map((opt) => (
            <label key={opt} className="option">
              <input
                type="radio"
                name={`question-${index}`}
                value={opt}
                onChange={() => handleOptionChange(index, `opt-${opt}`)}
                checked={answers[index] === `opt-${opt}`}
              />
              {question[`opt-${opt}`]}
            </label>
          ))}
        </div>
      ))}

      <button type="submit" className="submit-button">SUBMIT</button>

      <label style={{ display: 'block', marginTop: '20px' }}>
        Show Correct Answers
        <input
          type="checkbox"
          checked={showCorrectAnswers}
          onChange={e => setShowCorrectAnswers(e.target.checked)}
          style={{ marginLeft: '10px' }}
        />
      </label>      

      {incorrectAnswers.length > 0 && (
          <>
          <h2>Incorrect Answers</h2>
            {incorrectAnswers.map((incorrect, index) => (
              <div key={incorrect['Q-n']}>
                <div className="incorrect-question">
                  {incorrect['Q-n']}: {incorrect.Q}
                </div>
                <div className="correct-answer">
                  {showCorrectAnswers && <p>Correct Answer: {incorrect[incorrect.A]}</p>}
                </div>
              </div>
            ))}
      </>
      )}

    </form>
    </div>
    </>
  );
}

export default QuizApp;
