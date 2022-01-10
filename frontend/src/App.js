import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home'
import About from './About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
