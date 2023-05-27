import React from 'react'
import {
  Link,
} from "react-router-dom";

const Home =()=>{
    document.title = "Home - NewsApp  ";
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

export default Home
