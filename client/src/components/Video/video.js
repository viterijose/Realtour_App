import React from "react";
import "./video.css";
import "./font-awesome.css"
import { Col, Row, Container } from "../../components/Grid";

import openSocket from 'socket.io-client';
const socket = openSocket(':3002');

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
        // document.getElementById("battery-indicator").style.width = data[0].value + "%";
        document.getElementById("numVal").innerHTML = data[0].value + "%";
        let batPercent = data[0].value;

        //Battery percentage tests
        // document.getElementById("battery-indicator").style.width = count  + "%";
        // document.getElementById("numVal").innerHTML = count + "%";
        // let batPercent = count;


        let level = document.getElementById("batteryNew");

        if (batPercent >= 80) {
            level.innerHTML = "&#xf240;";
            level.setAttribute("style", "color:Green");

        } else if (batPercent <= 79 && batPercent >= 60) {
            level.innerHTML = "&#xf241;";
            level.setAttribute("style", "color:lightGreen");
        } else if (batPercent <= 59 && batPercent >= 40) {
            level.innerHTML = "&#xf242;";
            level.setAttribute("style", "color:#FC3");
        } else if (batPercent <= 39 && batPercent >= 20) {
            level.innerHTML = "&#xf243;";
            level.setAttribute("style", "color:Orange");
        } else if (batPercent <= 19 && batPercent >= 0) {
            level.innerHTML = "&#xf244;";
            level.setAttribute("style", "color:Red");
        }
        if (count <= 99)
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
        //*** this is Key getting it working  */
        // eslint-disable-next-line
        new NodecopterStream(document.getElementById("droneStream"), { hostname: 'localhost', port: 3010 });

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        var constraints = { audio: false, video: true };
        var video = document.querySelector("video");

        function successCallback(stream) {
            window.stream = stream; // stream available to console
            if (window.URL) {
                video.src = window.URL.createObjectURL(stream);
            } else {
                video.src = stream;
            }
            video.play();
        }
        function errorCallback(error) {
            console.log("navigator.getUserMedia error: ", error);
        }
        navigator.getUserMedia(constraints, successCallback, errorCallback);
    }//componentDidMount

    render() {
        return (
            <div className="video-container">

                {/* <Container video-container> */}
                <div className="row">
                    {/* <div className="col-6"> </div> */}

                    <div className="col-6"> <br /> <br />


                        <div className="Batterycontainer">

                            <span style={{ fontSize: '2em', marginRight: "256px", fontWeight: 'bold' }}>Live Drone Feed</span><div className="a"> <span id="numVal">loading Battery</span></div>  <div className="a"> <div id="batteryNew" className="fa"></div> </div>

                        </div>




                        <div className="video-player">
                            <div id="droneStream"></div>
                            <br />
                            <p> <strong>Current Date: </strong>{this.state.timestamp} </p>
                        </div>

                    </div>
                    <div className="col-6">
                        <br />
                        <h1 style={{ marginLeft: '13%', fontSize: '2em', fontWeight: 'bold' }}>Your Camera Feed</h1><br />
                        <video style={{ backgroundColor: "#333" }} id="live" width="640" height="360" autoPlay></video>
                    </div>
                </div>

                <Row>
                    <Col size="lg-6">


                        <br />


                        <br />

                        <div className="clear"></div>


                        <div className="" role="group" aria-label="Basic example">
                            <h2>Controls</h2>
                            <button onClick={() => {
                                console.log("Button clicked launch")
                                socket.emit('event', { name: "takeoff" });
                            }} type="button" className="btn btn-success">Launch</button>

                            <button onClick={() => {
                                console.log("Button clicked stop")
                                socket.emit('event', { name: "stop" });
                            }} type="button" className="btn btn-danger">Stop</button>

                            <button onClick={() => {
                                console.log("Button clicked land")
                                socket.emit('event', { name: "land" });
                            }} type="button" className="btn btn-warning">Land</button>

                            <button onClick={() => {
                                console.log("Button clicked spin")
                                socket.emit('event', { name: "spin" });
                            }} type="button" className="btn btn-info">spin</button>
                            <button onClick={() => {
                                console.log("Button clicked Demo")
                                socket.emit('event', { name: "demo" });
                            }} type="button" className="btn btn-primary">Demo</button>

                        </div>
                    </Col>
                </Row>

                <Col size="lg-6">

                    {/* <h1>Your Camera Feed</h1>
                        <video id="live" width="640" height="360" autoPlay></video> */}
                </Col>
                {/* </Container> */}

            </div>
        )
    }
}
export default Video