import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled!", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar heading="TextCraft" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text here :) " mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div >

      </BrowserRouter >
    </>
  );
}

export default App;
