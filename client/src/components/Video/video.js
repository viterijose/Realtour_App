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
        new NodecopterStream(document.getElementById("droneStream"), {hostname:'localhost',port: 3010});

        //   const script = document.createElement("script");

        //   script.src = "nodecopter-client.js";
        //   script.async = true;

        //   document.body.appendChild(script);

        //   const script2 = document.createElement("script");
        //   script2.src = "/dronestream/nodecopter-client.js";
        //   script2.async = true;
        //   document.body.appendChild(script2);


    }

    render() {
        return (
            <div>

                <p> THIS IS A TEST VIDEO</p>

                <div id="droneStream" className="liveVid">
                    test
                    <p className="App-intro">
                        This is the timer value: {this.state.timestamp}
                    </p>
                </div>
            </div>
        )

    }

}
export default Video