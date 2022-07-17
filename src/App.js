import './App.css';
import Navbar from './Custom comp/Navbar';
import TextForm from './Custom comp/TextForm';
import About from './Custom comp/About';
import React, { useState } from 'react'
import Alert from './Custom comp/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const toggleMode = ()=>{
    if ( mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743' ;
    showAlert("Dark mode enabled" , "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled" , "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar tittle="W-Counter" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
      <div className="container my-3 " >
        <Switch>
          <Route exact path="/about">
            <About />
            </Route> 
            <Route exact path="/">
            <TextForm showAlert={showAlert} heading = "Enter your text to analyze" mode = {mode}/>
          </Route>
        </Switch>
      </div>
     </Router>
      
    </>
  );
}

export default App;
