'use strict';
// const events = require('./events');
// // const fligh = require('./manger');
// events.on('take-of', takeOf);

// function  takeOf(payload){
//     console.log(`flight take of at  ${flight.flightTakeOf}`);
//     setTimeout(() => {
//       events.emit(' takeOf ', payload);
//     }, 2000);
    
//   }
//   events.on('arrived', flightArrived);
//   function flightArrived(payload) {

//   setTimeout(() => {
//     console.log(`flight arrived  at  ${flight. flightArrivedOn}`);
//     events.emit('flightArrived', payload);
//   }, 2000);
// }

require('dotenv').config();
const io = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}/`;

const systemConnection = io.connect(host);

pilotConnection.on('flight',(fligh)=>{
  console.log(`'Pilot:Sorry i didn't catch this flight ID 332u443673r32yuf463'`)
  setTimeout(() => {
      pilotConnection.emit('arrived',flight);
      console.log(`'the flight wit id ${payload.fligh. flightNumber}'arrived`);
  }, );
  setTimeout(() => {
      pilotConnection.emit('took-off',flight);
      console.log(`'the flight wit id ${payload.fligh. flightNumber}'took-of);
  } );
  