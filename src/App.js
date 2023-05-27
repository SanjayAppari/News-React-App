
import React, {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=>{

  const apiKey = process.env.REACT_APP_API_KEY;

  const [mode,setMode] = useState('light');
  const [modeReverse,setModeReverse] = useState('dark');
  const [progress,setProgress] = useState(0);

  
  const handleMode = ()=>{
    if(mode === 'dark'){
       setMode('light');
       setModeReverse('dark');
       document.body.style.backgroundColor = "white";
       document.body.style.color = "black";
    }
    else{
       setMode('dark');
       setModeReverse('light');
       document.body.style.backgroundColor = "#202020";
       document.body.style.color = "white";
    }
  }


  const setProgressFun = (progressValue) =>{
    setProgress(progressValue)
  }

    return (
      <div>
      <Router>
          <Navbar mode={mode} modeReverse={modeReverse} handleMode={handleMode} />
          <LoadingBar
            height={3}
            color='blue'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/highlights" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="general" pageSize={8} country='in' category='general' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/business" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="business" pageSize={8} country='in' category='business' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/entertainment" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="entertainment" pageSize={8} country='in' category='entertainment' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/general" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="general" pageSize={8} country='in' category='general' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/health" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="health" pageSize={8} country='in' category='health' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/science" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="science" pageSize={8} country='in' category='science' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} /> 
            <Route exact path="/sports" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="sports" pageSize={8} country='in' category='sports' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/> }/>
            <Route exact path="/technology" element={<News setProgressFun={setProgressFun}  apiKey={apiKey} key="technology" pageSize={8} country='in' category='technology' mode={mode} modeReverse={modeReverse} handleMode={handleMode}/>} />
          </Routes>
      </Router>
      
      </div>
    )
  
}


export default App