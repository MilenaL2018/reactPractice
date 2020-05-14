import React, {Component} from "react";
import '../css/tabata.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            current_time: 10,
            break_length: 20,
            num_sessions: 5,
        };

    }

    componentWillMount = () => {
        const current_time = this.state.current_time;
            this.myInterval = setInterval(()=> {
            this.setState(prevState =>({
                current_time: prevState.current_time - 1
            }));
        }, 1000);
    };

    Start = () => {
        this.setState({isRunning: true});

    };

    Stop = () => {
        this.setState({isRunning: false});
    };

    componentWillUnmount(){
        clearInterval(this.myInterval)
    }

    render() {
        const current_time = this.state.current_time;
        return(
            <div>
                <div id="timer-container">
                                <span id="timer"  className="large" onClick={"start"}>
                                    {current_time}
                                </span>
                    <canvas id="timer-canvas" width="240" height="240"/>
                    <button type="button" onClick={this.Start}>Start</button>
                    <button type="button" onClick={this.Stop}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Timer;