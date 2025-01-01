import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Scoreboard from "../pages/Scoreboard";

// Lazy load components
const Home = lazy(() => import("../pages/Home"));
const GamePage = lazy(() => import("../pages/game-page/GamePage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<GamePage />} />
        <Route path="/score-board" element={<Scoreboard />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default AppRouter;
