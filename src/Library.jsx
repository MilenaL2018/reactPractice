import React, {Component} from "react";
import "./css/library.css"


// This Class component also can have props
class Library extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.tracks = [{
                "track": 1,
                "name": "All This Is - Joe L.'s Studio",
                "duration": "2:46",
                "file": "JLS_ATI"
            }, {
            "track": 2,
                "name": "All The King's Men - Broadwing Studio (Final Mix)",
                "duration": "5:01",
                "file": "BS_ATKM"
        }, {
            "track": 3,
                "name": "All The King's Men - Broadwing Studio (First Mix)",
                "duration": "5:05",
                "file": "BSFM_ATKM"
        }];

    }

    handleLoad(event) {

    }


    render() {
        return(
            <div className="wrapper">
                    <div className="list" onLoad={this.handleLoad}>

                    </div>
            </div>
        );
    }
}

export default Library;