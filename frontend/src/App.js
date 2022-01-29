import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";
import Gravity from "./Gravity/Gravity";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/gravity" element={<Gravity />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
