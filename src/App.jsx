import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css';

const pages = Array.from({ length: 30 }, (_, i) => {
  const pageNumber = i + 1;
  return { path: `/page${pageNumber}`, component: React.lazy(() => import(`./blogs/Page${pageNumber}.jsx`)) };
});

function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-full h-auto w-full text-white bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/page1" />} /> {/* Redirects "/" to "/page1" */}
          {pages.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<React.Suspense fallback={<div>Loading...</div>}><Component /></React.Suspense>} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
