import React from "react";
import "./SpaceDestroyer.css";

const SpaceDestroyer = () => {
    return (
        <div className="space-destroyer">
          {/* Central Core */}
          <div className="destroyer-core"></div>
    
          {/* Outer Ring */}
          <div className="destroyer-ring"></div>
    
          {/* Side Wings */}
          <div className="wing left-wing"></div>
          <div className="wing right-wing"></div>
    
          {/* Glowing Pulses */}
          <div className="glow-pulse top"></div>
          <div className="glow-pulse left"></div>
          <div className="glow-pulse right"></div>
        </div>
      );
};

export default SpaceDestroyer;
