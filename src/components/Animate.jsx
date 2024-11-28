import React, { useEffect, useState } from "react";
import './Hero.css'
function Animate() {
        
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Générer des étoiles dynamiques
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 300; i++) {
        const size = Math.random() * 3 + 2; // Taille aléatoire entre 1px et 4px
        starArray.push({
          id: i,
          top: Math.random() * 100 + "%", // Position verticale aléatoire
          left: Math.random() * 100 + "%", // Position horizontale aléatoire
          size,
          delay: Math.random() * 5, // Délai aléatoire
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);
  return (
        <div className="absolute inset-0 z-0" style={{height:'76rem'}}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-slate-300 rounded-full opacity-80 animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
  )
}

export default Animate