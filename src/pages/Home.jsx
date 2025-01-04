import React from "react";
import Player from "../modules/player/Player";
import EnemySaucer from "../modules/enemy/EnemySaucer/EnemySaucer";
import SpaceBug from "../modules/enemy/SpaceBug/SpaceBug";
import SpaceDestroyer from "../modules/enemy/SpaceDestroyer/SpaceDestroyer";
import {RegularProjectile,BossProjectile,EnemyProjectileBall,EnemyProjectileRing,ShotgunProjectile} from "../modules/projectiles/Projectiles";

function Home() {
  return (
    <div>
      <div className="flex flex-wrap gap-16 justify-center items-center">
        <div className="flex flex-col text-center gap-4 items-center">
          <Player />
          <h1 className="text-white font-bold mt-4">PLAYER</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <EnemySaucer />
          <h1 className="text-white font-bold mt-4">Enemy Saucer</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <SpaceBug />
          <h1 className="text-white font-bold mt-4">SpaceBug</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <SpaceDestroyer />
          <h1 className="text-white font-bold mt-4">SpaceDestroyer</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-16 justify-center items-center">
        <div className="flex flex-col text-center gap-4 items-center">
          <RegularProjectile />
          <h1 className="text-white font-bold mt-4">RegularProjectile</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <ShotgunProjectile />
          <h1 className="text-white font-bold mt-4">RegularProjectile</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <EnemyProjectileBall />
          <h1 className="text-white font-bold mt-4">RegularProjectile</h1>
        </div>
        <div className="flex flex-col text-center gap-4 items-center">
          <EnemyProjectileRing />
          <h1 className="text-white font-bold mt-4">RegularProjectile</h1>
        </div>

        <div className="flex flex-col text-center gap-4 items-center">
          <BossProjectile />
          <h1 className="text-white font-bold mt-4">RegularProjectile</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
