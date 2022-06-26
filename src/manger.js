'use strict';
const events = require('./events');
const { faker } = require('@faker-js/faker');
require('.pilot');
require('.system');

events.on('newfligh', NewflightArrived);
setInterval(() => {
  
  let  flight = {

        Airport:"Royal Jordanian Airlines",
       pilotName:faker.name.findName() ,
        flightNumber: faker.datatype.uuid(),
        comeFrome: faker.address.city(),
       flightArrivedOn:faker.date.recent(),
       flightTakeOf:faker.date.recent()
    }

    console.log(`Ther is a new flight with Number ${Flight.flightNumber} and pilot${Flight.pilotName} `) ;
    events.emit('new-fligh',  flight);
 
}, 3000);

events.on('arrived', flightArrived);
function flightArrived(Flight){
    console.log(`  flight ${Flight.flightNumber} which come frome ${Flight.comeFrome} arrived safely`);
}