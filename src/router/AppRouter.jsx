import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

// Lazy load components
const Home = lazy(() => import('../pages/Home'));

const AppRouter = () => {
  return (
        <Suspense fallback={<div>Loading...</div>}>
          <Header /> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer /> 
        </Suspense>
  );
};

export default AppRouter;
