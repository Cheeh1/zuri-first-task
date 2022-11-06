import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import Contact from '../components/Contact'
import Error from '../components/Error'

function RouterLink() {

    return (
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    );
  }
  export default RouterLink;
