
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




export default class App extends Component {

  constructor(){
    super();
    this.state = {
      mode:'light',
      modeReverse:'dark'
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

  render() {
    return (
      <div>
      <Router>
          <Navbar mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)} />
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/highlights" element={<News key="general" pageSize={8} country='in' category='general' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/business" element={<News key="business" pageSize={8} country='in' category='business' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} country='in' category='entertainment' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/general" element={<News key="general" pageSize={8} country='in' category='general' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/health" element={<News key="health" pageSize={8} country='in' category='health' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/science" element={<News key="science" pageSize={8} country='in' category='science' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} /> 
            <Route exact path="/sports" element={<News key="sports" pageSize={8} country='in' category='sports' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/> }/>
            <Route exact path="/technology" element={<News key="technology" pageSize={8} country='in' category='technology' mode={this.state.mode} modeReverse={this.state.modeReverse} handleMode={this.handleMode.bind(this)}/>} />
          </Routes>
      </Router>
      
      </div>
    )
  }
}
