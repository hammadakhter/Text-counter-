import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert , setalert] = useState(null);

  const showalert = (message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }

  const toggleToChangeMode = ()=>{
    if(darkMode==="light"){
      setDarkMode("dark");
      document.body.style.backgroundColor = "black"
      showalert("Dark mode enable","success")
    }else{
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
      showalert("Light mode enable","success")
    }
  }
  return (
    <>
    <Navbar darkMode={darkMode} toggleToChangeMode={toggleToChangeMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Text heading="Enter text to analyse below" showalert={showalert} darkMode={darkMode}/>
    </div>
    </>
  );
}

export default App;
