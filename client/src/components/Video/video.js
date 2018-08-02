import React from "react";
import "./video.css";


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

socket.on('connect', function () {
    console.log("Connection Successful");

});
function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

class Video extends React.Component {

    state = {
        timestamp: 'no timestamp yet'
    };

    constructor(props) {
        super(props);
        subscribeToTimer((err, timestamp) => this.setState({
            timestamp
        }));

    }

    componentDidMount() {
        // var lastPng; 

        //*** this is Key getting it working  */
        // eslint-disable-next-line
        new NodecopterStream(document.getElementById("droneStream"), { hostname: 'localhost', port: 3010 });

    }

    render() {
        return (
            <div>

                <h1> Real Tour Live Drone Feed</h1>
                <br />
                <div className="vdo-log margin_bottom">
                    <div className="video-player">
                        <div id="droneStream">

                        </div>
                        <p>Current Date: {this.state.timestamp} </p>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger">Launch</button>
                    <button type="button" className="btn btn-success">Land</button>
                    <button type="button" className="btn btn-warning">Camera</button>
                </div>

            </div>
        )

    }

}
export default Video