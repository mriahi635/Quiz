import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import './styles.css'; // Importez votre fichier CSS


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz-js" element={<QuizPage quizType="js" />} />
      <Route path="/quiz-html" element={<QuizPage quizType="html" />} />
      <Route path="/quiz-php" element={<QuizPage quizType="php" />} />
      <Route path="/quiz-bases-de-donnees" element={<QuizPage quizType="bases_de_donnees" />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
