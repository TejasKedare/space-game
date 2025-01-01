import React from "react";
import "./Player.css"; // Custom CSS for styling

const Player = () => {
  return (
    <div className="player">
      {/* Spaceship Body */}
      <div className="player-body">
        <div className="player-core"></div>
      </div>

      {/* Thrusters */}
      <div className="player-thrusters">
        <div className="thruster"></div>
        <div className="thruster"></div>
      </div>
    </div>
  );
};

export default Player;
