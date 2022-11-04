import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    // <div>
    //   < Home />
    //   < Contact />
    // </div>
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
