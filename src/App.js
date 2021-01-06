import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import mainImage from './images/Nicole-Travis-Wedding-404.jpeg'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <img src={mainImage} alt="hh" className="responsive"></img>
      </div>
    </>

  )
}

export default App;
