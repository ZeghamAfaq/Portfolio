import React from 'react'
import Intro from './components/Intro'
import './app.css'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Intro />
        <About />
        <Contact />
    </div>
  );
}

export default App;
