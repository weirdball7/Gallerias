import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CallToAction />
    </>
  );
}

export default App;
