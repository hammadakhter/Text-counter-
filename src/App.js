import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleToChangeMode = ()=>{
    if(darkMode==="light"){
      setDarkMode("dark");
      document.body.style.backgroundColor = "black"
    }else{
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <Navbar darkMode={darkMode} toggleToChangeMode={toggleToChangeMode}/>
    <div className="container my-3">
      <Text heading="Enter text to analyse below" darkMode={darkMode}/>
    </div>
    </>
  );
}

export default App;
