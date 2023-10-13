import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import data from "./data/data.json";

// pages and components
import { Crew } from "./pages/Crew";
import { Destination } from "./pages/Destination";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";
import { DesignSystem } from "./pages/DesignSystem";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination data={data.destinations} />}
          />
          <Route path="/crew" element={<Crew data={data.crew} />} />
          <Route
            path="/technology"
            element={<Technology data={data.technology} />}
          />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
