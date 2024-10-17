// src/data.js
export const quizzes = {
    js: [
      { q: "Qu'est-ce que React?", choix: ["Une bibliothèque JavaScript", "Un framework CSS", "Un serveur"], reponse: 0 },
      { q: "Que signifie JSX?", choix: ["JavaScript XML", "JavaScript Xtreme", "JavaScript eXtended"], reponse: 0 },
      { q: "Quelle est la méthode pour mettre à jour l'état dans un composant fonctionnel?", choix: ["setState", "useState", "updateState"], reponse: 1 },
      { q: "Comment passe-t-on des données d'un composant parent à un composant enfant?", choix: ["Via le state", "Via props", "Via context"], reponse: 1 },
      { q: "Quel hook est utilisé pour gérer les effets de bord?", choix: ["useEffect", "useMemo", "useReducer"], reponse: 0 }
    ],
    html: [
      { q: "Que signifie HTML?", choix: ["HyperText Markup Language", "HyperText Machine Language", "HyperText Main Language"], reponse: 0 },
      { q: "Quel est le but de la balise <a>?", choix: ["Créer un lien hypertexte", "Ajouter une image", "Ajouter un paragraphe"], reponse: 0 },
      { q: "Quelle balise est utilisée pour les titres?", choix: ["<h1> à <h6>", "<title>", "<heading>"], reponse: 0 },
      { q: "Comment définir une liste non ordonnée?", choix: ["<ul>", "<ol>", "<li>"], reponse: 0 },
      { q: "Quelle est la balise pour insérer une image?", choix: ["<img>", "<image>", "<pic>"], reponse: 0 }
    ],
    php: [
      { q: "Qu'est-ce que PHP?", choix: ["Un langage de programmation côté serveur", "Un langage de balisage", "Un type de base de données"], reponse: 0 },
      { q: "Quelle extension est utilisée pour les fichiers PHP?", choix: [".php", ".html", ".txt"], reponse: 0 },
      { q: "Comment déclarer une variable en PHP?", choix: ["$variable", "variable$", "var variable"], reponse: 0 },
      { q: "Quelle fonction est utilisée pour inclure un fichier PHP?", choix: ["include()", "require()", "import()"], reponse: 0 },
      { q: "Comment commenter une ligne en PHP?", choix: ["// commentaire", "# commentaire", "<!-- commentaire -->"], reponse: 0 }
    ],
    bases_de_donnees: [
      { q: "Qu'est-ce qu'une base de données?", choix: ["Un système de stockage de données", "Un langage de programmation", "Un type de serveur"], reponse: 0 },
      { q: "Quelle est la commande SQL pour récupérer des données?", choix: ["SELECT", "GET", "RETRIEVE"], reponse: 0 },
      { q: "Quel est le type de relation où une entrée dans une table peut avoir plusieurs entrées dans une autre table?", choix: ["Un-à-plusieurs", "Un-à-un", "Plusieurs-à-plusieurs"], reponse: 0 },
      { q: "Quel langage est utilisé pour gérer les bases de données relationnelles?", choix: ["SQL", "HTML", "CSS"], reponse: 0 },
      { q: "Que signifie ACID en termes de bases de données?", choix: ["Atomicité, Cohérence, Isolation, Durabilité", "Automatisation, Cohérence, Isolation, Durabilité", "Atomicité, Complexité, Isolation, Durabilité"], reponse: 0 }
    ]
};
