import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";

const weeks = Array.from({ length: 20 }, (_, i) => {
  const weekNumber = i + 1;
  return {
    path: `/week${weekNumber}`,
    component: React.lazy(() => import(`./blogs/Week${weekNumber}.jsx`)),
  };
});

function App() {
  return (
    <div className="min-h-full h-auto w-full bg-black absolute bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/week1" />} />
          {weeks.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </React.Suspense>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
