import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Main from './mainSection';
import Footer from './footer';
import Artists from './pages/Artists';
import SigninSignup from './pages/SigninSignup';

function App() {
  return (
    <Router basename="/Gallerias">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/exhibitions" element={<div>Exhibitions</div>} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/paintings" element={<div>Paintings for Sale</div>} />
        <Route path="/signin" element={<SigninSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
