import React, { useState, useEffect, useRef } from "react";
import "./Player.css";

const Player = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const keys = useRef({}); // to track pressed keys
  const speed = 5; // the speed at which the player moves

  useEffect(() => {
    const handleKeyDown = (e) => {
      keys.current[e.key.toLowerCase()] = true; // to handle both uppercase and lowercase keys
    };

    const handleKeyUp = (e) => {
      keys.current[e.key.toLowerCase()] = false;
    };

    const movePlayer = () => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        // Track movement direction
        let deltaX = 0;
        let deltaY = 0;

        if (keys.current["w"]) {
          newY = Math.max(prev.y - speed, 0); // to move up
          deltaY -= speed;
        }
        if (keys.current["s"]) {
          newY = Math.min(prev.y + speed, window.innerHeight - 100); // to move down
          deltaY += speed;
        }
        if (keys.current["a"]) {
          newX = Math.max(prev.x - speed, 0); // to move left
          deltaX -= speed;
        }
        if (keys.current["d"]) {
          newX = Math.min(prev.x + speed, window.innerWidth - 100); // to move right
          deltaX += speed;
        }

        // to calculate rotation based on movement direction
        if (deltaX !== 0 || deltaY !== 0) {
          const angleInRadians = Math.atan2(deltaY, deltaX); // to calculate angle
          const angleInDegrees = (angleInRadians * 180) / Math.PI; // to convert to degrees
          setRotation(angleInDegrees + 90); // to adjust angle to match CSS coordinate system
        }

        return { x: newX, y: newY };
      });

      requestAnimationFrame(movePlayer);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    requestAnimationFrame(movePlayer);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div
      className="player"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
        transform: `rotate(${rotation}deg)`, // to dynamically apply rotation
        transformOrigin: "center", // to ensure rotation happens from the center of the spaceship
      }}
    >
      <div className="player-body">
        <div className="player-core"></div>
      </div>
      <div className="player-thrusters">
        <div className="thruster"></div>
        <div className="thruster"></div>
      </div>
    </div>
  );
};

export default Player;
