const arDrone = require('ar-drone');


let pngStream = arDrone.createClient().getPngStream();
let vidStream = arDrone.createClient().getVideoStream();


let lastPng;

pngStream
    .on('error', console.log)
    .on('data', function(pngBuffer){
        lastPng = pngBuffer;
    })

    console.log("In the Video Steam");