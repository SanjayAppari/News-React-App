import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className='container home'>
        <div className="main-home">
            <center><h1>News App</h1></center>
            <p>North - East - West - South</p>
            <a href="/highlights"><button className="btn btn-primary">HighLights</button></a>   
        </div>
      </div>
    )
  }
}

export default Home
