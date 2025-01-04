import React from "react";
import "./Projectiles.css";

// Regular Projectile
export const RegularProjectile = ({ position = { x: 330, y: 500 } }) => (
  <div
    className="regular-projectile"
    style={{ top: position.y, left: position.x }}
  />
);

// Shotgun Projectile
export const ShotgunProjectile = ({ position = { x: 280, y: 500 } }) => (
  <div
    className="shotgun-projectile"
    style={{ top: position.y, left: position.x }}
  />
);

// Enemy Projectile - Glowing Ball
export const EnemyProjectileBall = ({ position = { x: 350, y: 500 } }) => (
  <div
    className="enemy-projectile-ball"
    style={{ top: position.y, left: position.x }}
  />
);

// Enemy Projectile - Glowing Ring
export const EnemyProjectileRing = ({ position = { x: 380, y: 500 } }) => (
  <div
    className="enemy-projectile-ring"
    style={{ top: position.y, left: position.x }}
  />
);

// Boss Projectile
export const BossProjectile = ({ position = { x: 400, y: 500 } }) => (
  <div
    className="boss-projectile"
    style={{ top: position.y, left: position.x }}
  />
);
