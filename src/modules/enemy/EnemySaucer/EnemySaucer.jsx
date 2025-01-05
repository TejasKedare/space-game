import React, { useEffect, useState } from "react";
import "./EnemySaucer.css";

const EnemySaucer = () => {
  const [saucers, setSaucers] = useState([]);

  // Function to generate random values for movement
  const generateRandomMovement = () => {
    return {
      randomX: Math.random(),  // random horizontal start
      randomY: Math.random(),  // random vertical start
      duration: Math.random() * 5 + 5 + "s",  // random speed (slow)
    };
  };

  useEffect(() => {
    const numberOfSaucers = 5; // number of saucers to generate
    const newSaucers = [];

    for (let i = 0; i < numberOfSaucers; i++) {
      newSaucers.push(generateRandomMovement());
    }

    setSaucers(newSaucers);
  }, []);

  return (
    <>
      {saucers.map((movement, index) => (
        <div
          key={index}
          className="enemy-saucer"
          style={{
            animationDuration: movement.duration,  // to slow down movement for each saucer
            '--random-x': movement.randomX,  // to set random X direction
            '--random-y': movement.randomY,  // to set random Y direction
          }}
        >
          <div className="saucer-top"></div>
          <div className="saucer-bottom"></div>
          <div className="saucer-cockpit"></div> 
        </div>
      ))}
    </>
  );
};

export default EnemySaucer;
