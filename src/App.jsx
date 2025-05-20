import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import './App.css';
import Navbar from "./components/Navbar";

const weeks = Array.from({ length: 2 }, (_, i) => {
  const weekNumber = i + 1;
  return { path: `/week${weekNumber}`, component: React.lazy(() => import(`./blogs/Week${weekNumber}.jsx`)) };
});

function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-full h-auto w-full text-white bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/week1" />} />
          {weeks.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<React.Suspense fallback={<div>Loading...</div>}><Component /></React.Suspense>} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
