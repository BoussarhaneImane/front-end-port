import React, { useEffect, useState } from "react";
import "./Hero.css";

function Animate() {
  const [webLines, setWebLines] = useState([]);

  useEffect(() => {
    // Générer une toile d'araignée
    const generateWeb = () => {
      const lines = [];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const numLines = 20; // Nombre de lignes radiales
      const numCircles = 8; // Nombre de cercles concentriques

      // Lignes radiales
      for (let i = 0; i < numLines; i++) {
        const angle = (i * 360) / numLines;
        const x = centerX + Math.cos((angle * Math.PI) / 180) * window.innerWidth;
        const y = centerY + Math.sin((angle * Math.PI) / 180) * window.innerHeight;

        lines.push({
          id: `line-${i}`,
          x1: centerX,
          y1: centerY,
          x2: x,
          y2: y,
        });
      }

      // Cercles concentriques
      for (let j = 1; j <= numCircles; j++) {
        const radius = (j * window.innerWidth) / (2 * numCircles);
        lines.push({
          id: `circle-${j}`,
          cx: centerX,
          cy: centerY,
          radius,
        });
      }

      setWebLines(lines);
    };

    generateWeb();

    // Redimensionnement
    window.addEventListener("resize", generateWeb);
    return () => window.removeEventListener("resize", generateWeb);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Lignes radiales */}
        {webLines
          .filter((line) => line.x1)
          .map((line) => (
            <line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#4c1d95" // Indigo foncé
              strokeWidth="2"
              className="animate-web-line"
            />
          ))}
        {/* Cercles concentriques */}
        {webLines
          .filter((circle) => circle.cx)
          .map((circle) => (
            <circle
              key={circle.id}
              cx={circle.cx}
              cy={circle.cy}
              r={circle.radius}
              stroke="#4c1d95"
              fill="none"
              strokeWidth="1"
              className="animate-web-circle"
            />
          ))}
      </svg>
    </div>
  );
}

export default Animate;
