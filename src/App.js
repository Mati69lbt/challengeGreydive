import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import HomeNebula from "./Components/nebula/HomeNebula";
import HomeViamo from "./Components/viamo/HomeViamo";
function App() {
  return (
    <div className="App">
      <Router>
        <React.StrictMode>
          <div>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="viamo" element={<HomeViamo />} />
              <Route path="nebula" element={<HomeNebula />} />
            </Routes>
          </div>
        </React.StrictMode>
      </Router>
    </div>
  );
}

export default App;
