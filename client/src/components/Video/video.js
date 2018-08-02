import React from "react";
import "./video.css";
import "./font-awesome.css"


import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3002');

socket.on('connect', function () {
    console.log("Connection Successful");

});
function subscribeToTimer(cb) {
    socket.on('timer', timestamp => {
        cb(null, timestamp[0].time)
    });

    socket.emit('subscribeToTimer', 1000);
}
let count = 0;
socket.on('timer', function (data) {


    //@TODO: clean the CSS and put it all in one container and reponsive
    //@TODO: add code to for take off and land buttons to function.
    if (data[0].name == "battery") {
        //console.log(data);
        document.getElementById("battery-indicator").style.width = data[0].value + "%";
        document.getElementById("numVal").innerHTML = data[0].value + "%";
        let batPercent = data[0].value;
       
            //Battery percentage tests
            // document.getElementById("battery-indicator").style.width = count  + "%";
            // document.getElementById("numVal").innerHTML = count + "%";
            // let batPercent = count;


       let level =  document.getElementById("batteryNew");

        if(batPercent >= 80){
            level.innerHTML = "&#xf240;";
        }else if(batPercent <=79 && batPercent >=60){
            level.innerHTML = "&#xf241;";
        }else if(batPercent <=59 && batPercent >=40){
            level.innerHTML = "&#xf242;";
        }else if(batPercent <=39 && batPercent >=20){
            level.innerHTML = "&#xf243;";
        }else if(batPercent <=19 && batPercent >=0){
            level.innerHTML = "&#xf244;";
        }

        if(count<=99)
        count++;
    }
});

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
                
                <div class="container">
                    <div id="batteryNew" class="fa"></div><span id="numVal">loading</span>
                </div>

                <br />
                <div className="bar color0">
                    <span id="battery-indicator" style={{ width: "50%" }}></span>
                </div>
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