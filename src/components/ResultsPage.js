// src/components/ResultsPage.js
import React from 'react';
import { quizzes } from '../data';
import { useLocation } from 'react-router-dom';
import '../styles.css'; // Importer le fichier CSS


const ResultsPage = () => {
  const location = useLocation();
  const { responses, quizType = 'js' } = location.state || { responses: [], quizType: 'js' };

  // Récupérer les questions en fonction du type de quiz
  const questions = quizzes[quizType];

  // Calculer le score
  let score = 0;
  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === questions[i].reponse) {
      score += 1;
    }
  }

  return (
    <div>
      <h1>Résultats</h1>
      <p>Votre score : {score} / {questions.length}</p>
    </div>
  );
};

export default ResultsPage;
