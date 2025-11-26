import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Skills from './Components/Skills';
import About from './Components/About';
import  Contact from './Components/Contact';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/service" element={<Services />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
