import React from "react";
import "./GamePage.css";
import Player from "../../modules/player/Player";

function GamePage() {
  return (
    <div className="game-container">
      {/* Background Animation */}
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
      </div>

      {/* Player */}
      <Player />
    </div>
  );
}

export default GamePage;
