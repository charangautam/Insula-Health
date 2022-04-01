import React from 'react';
// embedded pages
import Home from './pages/home/Home'
import Mental from './pages/mental/Mental';

// router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Mental' element={<Mental />} />
      </Routes>
    </Router>
  );
}

export default App;
