import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SignInSignUp from './components/SignInSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/Gallerias" element={<Home />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
        <Footer />
      </div>
=======
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
>>>>>>> fd7aacf4c6debc85c53ead39c87c2c15586b10f9
    </Router>
  );
}

<<<<<<< HEAD
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
}

=======
>>>>>>> fd7aacf4c6debc85c53ead39c87c2c15586b10f9
export default App;
