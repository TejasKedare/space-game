import React from "react";
import usePlayerMovement from "../../hooks/usePlayerMovement"; // Import the custom hook
import "./Player.css";

const Player = () => {
  const { position, rotation } = usePlayerMovement(5); // Use the hook to get position and rotation

  return (
    <div
      className="player"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        position: "absolute",
        transform: `rotate(${rotation}deg)`, // apply rotation
        transformOrigin: "center", // ensure rotation happens from the center
      }}
    >
      <div className="player-body">
        <div className="player-core"></div>
      </div>
      <div className="player-guns">
        <div className="gun left-gun"></div>
        <div className="gun right-gun"></div>
      </div>
      <div className="player-thrusters">
        <div className="thruster"></div>
        <div className="thruster"></div>
      </div>
    </div>
  );
};

export default Player;
