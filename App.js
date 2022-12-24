//import logo from './logo.svg';
// import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import About from "./components/About"
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"



//import TextForms from "./components/TextForms";

function App() {

  const[mode,setMode]=useState('light');
  const[alert, setAlert]=useState();
  const showAlert=(message, type)=>
  {
    setAlert(
      {
        msg:message,
        type:type
      })
      setTimeout(()=> {
        setAlert(null);
       }, 1500)

  }
  const toggleMode=()=>{
   if(mode==='light')
   {
    setMode('dark');
    document.body.style.backgroundColor='#311d45';
    showAlert("dark mode is enabled","success");
   
   }
   else
   {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode is enabled","success");

   }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert  alert={alert}/>
      <div className="container my-3">
      <Switch>
            <Route exact path='/about'>
            <About mode={mode}/>
            </Route>
            <Route exact path='/'>
            <TextForms showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
            </Route>
      </Switch>
      </div>
      </Router>
      </>
  );
}

export default App;
