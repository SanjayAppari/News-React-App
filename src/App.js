import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import Home from './components/Home'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  apiKey = process.env.REACT_APP_API_KEY

  constructor(){
    super();
    this.state = {
      mode:'light',
      modeReverse:'dark',
      progress:0,
    }
  }

  
  handleMode(){
    if(this.state.mode === 'dark'){
       this.setState({mode:'light', modeReverse:'dark'});
       document.body.style.backgroundColor = "white";
       document.body.style.color = "black";
    }
    else{
      this.setState({mode:'dark', modeReverse:'light'});
       document.body.style.backgroundColor = "#202020";
       document.body.style.color = "white";
    }
  }


  setProgress = (progress) =>{
    this.setState({progress:progress});
  }

  render() {
    return (
      <div>
      <Router>
          <Navbar mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)} />
          <LoadingBar
            height={3}
            color='blue'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/highlights" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={8} country='in' category='general' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={8} country='in' category='business' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" pageSize={8} country='in' category='entertainment' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="general" pageSize={8} country='in' category='general' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={8} country='in' category='health' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" pageSize={8} country='in' category='science' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={8} country='in' category='sports' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/> }/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="technology" pageSize={8} country='in' category='technology' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} />
          </Routes>
      </Router>
      
      </div>
    )
  }
}