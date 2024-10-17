import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Importer le fichier CSS


function Home() {
  return (
    <div>
      <h2>Choisissez un sujet de quiz :</h2>
      <ul>
        <li>
          <Link to="/quiz-js">Quiz JavaScript</Link>
        </li>
        <li>
          <Link to="/quiz-html">Quiz HTML</Link>
        </li>
        <li>
          <Link to="/quiz-php">Quiz PHP</Link>
        </li>
        <li>
          <Link to="/quiz-bases-de-donnees">Quiz Bases de Données</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
