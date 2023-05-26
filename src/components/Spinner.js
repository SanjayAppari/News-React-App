import React, { Component } from 'react'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);



export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <lord-icon
          src="https://cdn.lordicon.com/ulhdumaq.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{width:'150px',height:'150px'}}>
        </lord-icon>
        <h1>Loading</h1>
      </div>
    )
  }
}

export default Spinner
