import React, { Component } from 'react'
import {
    Link,
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-${this.props.mode} shadow-sm p-3 rounded navbar-expand-lg bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="mx-auto"></div>
                            <ul className="navbar-nav mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>
                            <div className="form-check form-switch mb-2 mb-lg-0 ps-2">
                                <input  onClick={this.props.handleMode} className="form-check-input mt-2 d-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${this.props.modeReverse}`} htmlFor="flexSwitchCheckDefault" >
                                    <i style={{fontSize:'30px'}} className="fa-solid fa-moon"></i>
                                </label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
