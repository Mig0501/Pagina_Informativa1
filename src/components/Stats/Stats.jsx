import React, { useState } from 'react';
import './Stats.css';

const Stats = () => {
  // Estado local para contar "likes" o "interés"
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <section className="stats-container">
      <h3>¿Te gusta nuestro trabajo?</h3>
      <span className="stats-counter">{likes}</span>
      <p>Personas han mostrado interés en nuestras soluciones hoy.</p>
      
      <button className="stats-btn" onClick={handleLike}>
        👍 ¡Me interesa!
      </button>
    </section>
  );
};

export default Stats;
