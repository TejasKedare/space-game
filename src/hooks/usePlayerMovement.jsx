import { useState, useEffect, useRef } from "react";

const usePlayerMovement = (speed = 5) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const keys = useRef({}); // to track pressed keys

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
            const angleInRadians = Math.atan2(deltaY, deltaX); // to calculate angle , atan2() takes these two values and determines the direction you’re moving in.
            const angleInDegrees = (angleInRadians * 180) / Math.PI; // to convert to degrees : Degrees = Radians×180πDegrees=Radians×π180​
            setRotation(angleInDegrees + 90); // to adjust angle to match CSS coordinate system : In CSS, the default rotation starts at the positive x-axis (0°), but the player models is initially pointing upward +90 so the player's "upward" orientation matches the calculated angle.
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
  }, [speed]);

  return { position, rotation };
};

export default usePlayerMovement;

 /*
    How it works :
    When you press movement keys (W, A, S, D), deltaX and deltaY capture the direction of movement.
    Example: Pressing W + D means moving up-right, so deltaX = +speed, deltaY = -speed.
    Math.atan2(deltaY, deltaX) calculates the angle for this direction.
    The angle (converted to degrees) updates the rotation state, which is then applied to the player using CSS rotate().
    The result? The player always "faces" the direction of movement, even diagonally.

    requestAnimationFrame ensures these updates happen 60 times per second (or as fast as the screen refresh rate).
  */

    /* 
     Visualization :
     Imagine the player is an arrow starting at the top-left corner of the screen:

        Press "D" (Right):
          deltaX = 1, deltaY = 0
          (0, 1) → 0° → Arrow points right.

        Press "W" (Up):
          deltaX = 0, deltaY = -1
          (-1, 0) → 90° → Arrow points up.

        Press "W" + "D" (Up-Right):
          deltaX = 1, deltaY = -1
          (-1, 1) → 45° → Arrow points diagonally up-right.
     */ 