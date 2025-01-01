import React from "react";
import "./SpaceBug.css";

const SpaceBug = () => {
    return (
        <div className="space-virus">
        <div className="virus-core"></div>
        <div className="virus-spikes">
          <div className="spike bottom-left"></div>
          <div className="spike bottom-center"></div>
          <div className="spike bottom-right"></div>
        </div>
      </div>
    );
  };
  

export default SpaceBug;
