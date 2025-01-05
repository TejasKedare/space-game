import React from "react";  
import "./GamePage.css";
import Player from "../../modules/player/Player";
import EnemySaucer from "../../modules/enemy/EnemySaucer/EnemySaucer";
import SpaceBug from "../../modules/enemy/SpaceBug/SpaceBug";

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
 
      {/* Enemy Saucer */}
      <EnemySaucer/>

      {/* Space Bug */}
      {/* <SpaceBug/> */}
    </div>
  );
}

export default GamePage;
