import React from 'react';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Slider from './Components/layout/Slider';
import Card from './Components/layout/Card';
import Footer from './Components/layout/Footer'
import Parallax from './Components/layout/Parallax';
import Modal from './Components/layout/Modal';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Card />
      <Parallax />
      <Modal />
      <Footer />

    </div>
  );
}
export default App;
