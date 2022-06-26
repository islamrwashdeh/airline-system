'use strict';
const events = require('./events');
// const fligh = require('./manger');






events.on('take-of', takeOf);

function  takeOf(payload){
    console.log(`flight take of at  ${flight.flightTakeOf}`);
    setTimeout(() => {
      events.emit(' takeOf ', payload);
    }, 2000);
    
  }
  events.on('arrived', flightArrived);
  function flightArrived(payload) {

  setTimeout(() => {
    console.log(`flight arrived  at  ${flight. flightArrivedOn}`);
    events.emit('flightArrived', payload);
  }, 2000);
}
