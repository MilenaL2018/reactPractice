import React, {Component} from "react";
import './css/tabata.css';
import Timer from "./components/Timer";
import Input from "./components/Input";

class Tabata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session_length: 60,
            break_length: 20,
            num_sessions: 5,
            break_on: false,
            time_on: false,
            current_session: 0
        };

    }
    render() {
        return (
                <div>
                    <div id="content">
                        <div id="options">
                            <div className="timer-option">
                            <Input/>
                            </div>
                            <div className="timer-option">
                            <Input/>
                            </div>
                            <div className="timer-option">
                            <Input/>
                            </div>
                        </div>
                    <Timer/>
                    </div>
                </div>
        );
    }
}
export default Tabata;