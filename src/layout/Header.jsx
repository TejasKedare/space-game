import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center text-accent p-4 bg-transparent">
      {/* Lives */}
      <div className="text-xl font-mono">
        <strong>Lives:</strong> <span className="text-error">3</span>
      </div>

      {/* Title */}
      <div className="text-3xl font-extrabold font-mono text-center text-accent">
        SPACE GAME
      </div>

      {/* Score */}
      <div className="text-xl font-mono">
        <strong>Score:</strong> <span className="text-primary">1200</span>
      </div>
    </div>
  );
};

export default Header;
