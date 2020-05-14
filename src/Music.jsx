import React, {Component} from "react";
import "./css/music.css";
import Form from "react-bootstrap/Form";
import { FaVolumeUp, FaHeartbeat} from "react-icons/fa";


class Music extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="player">
                        <div id="track-name">Canción</div>
                            <div id="track-time">
                                <div className="progress-bar">
                                    <div className="bar"/>
                                </div>
                            </div>
                        <div className="control-panel">
                            <div className="controls">
                                <div className="prev"/>
                                <div  className="play"/>
                                <div className="next"/>
                            </div>
                         </div>
                        <div className="volume">
                            <Form className="range-slider">
                                <Form.Group controlId="formBasicRange">
                                    <Form.Control type="range" className="range-slider__range"/>
                                    <FaVolumeUp className="range-slider__value"/>
                                </Form.Group>
                            </Form>
                            <Form className="range-slider">
                                <Form.Group controlId="formBasicRange2">
                                    <Form.Control type="range" className="range-slider__range"/>
                                    <FaHeartbeat className="range-slider__value"/>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Music;