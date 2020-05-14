import React, {Component} from "react";
import '../css/tabata.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
    }

    render() {
        return (
            <div>
                <div className="timer-option">
                    <div>Ejercicio</div>
                    <button className="length-setter">-</button>
                    <input type="text" name="work-length" value={this.state.number}
                           onClick={this.handleInputChange()}/>
                    <button className="length-setter">+</button>
                </div>

            </div>

        );
    }
}
export default Input;