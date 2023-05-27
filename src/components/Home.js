import React, { Component } from 'react'
import {
  Link,
} from "react-router-dom";

export class Home extends Component {
  constructor(props){
    super(props);
    document.title = "Home - NewsApp  "
  }
  render() {
    return (
      <div className='container home'>
        <div className="main-home">
            <center><h1>News App</h1></center>
            <p>North - East - West - South</p>
            <Link to="/highlights"><button className="btn btn-primary">HighLights</button></Link>   
        </div>
      </div>
    )
  }
}

export default Home
