import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaRunning, FaPlayCircle} from "react-icons/fa";

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/tabata">Tabata</a>
                        <FaRunning/>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand" href="/music">Music</a>
                        <FaPlayCircle/>
                    </li>
                </ul>
                <div className="waveWrapper waveAnimation">
                    <div className="waveWrapperInner bgTop">
                        <div className="wave waveTop"/>
                    </div>
                    <div className="waveWrapperInner bgMiddle">
                        <div className="wave waveMiddle"/>
                    </div>
                    <div className="waveWrapperInner bgBottom">
                        <div className="wave waveBottom"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;