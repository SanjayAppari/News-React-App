import React, { Component } from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);



export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <lord-icon
          src="https://cdn.lordicon.com/ulhdumaq.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{width:'100px',height:'100px'}}>
        </lord-icon>
        <h4>Loading</h4>
      </div>
    )
  }
}

export default Spinner
