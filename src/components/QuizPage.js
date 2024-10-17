import React, { useState } from 'react';
import { quizzes } from '../data'; // Assurez-vous que le chemin vers data.js est correct
import { useNavigate, useParams } from 'react-router-dom';
import '../styles.css'; // Importer le fichier CSS


const QuizPage = ({ quizType }) => {
  const [responses, setResponses] = useState([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results', { state: { responses } });
  };

  const quizQuestions = quizzes[quizType];

  return (
    <div>
      <h1>Quiz {quizType}</h1>
      <form onSubmit={handleSubmit}>
        {quizQuestions.map((question, index) => (
          <div key={index}>
            <p style={{color:"blue",fontSize:"18px"}}>{question.q}</p>
            {question.choix.map((choix, choixIndex) => (
              <label key={choixIndex}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={choixIndex}
                  onChange={() => handleChange(index, choixIndex)}
                />
                {choix}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default QuizPage;
