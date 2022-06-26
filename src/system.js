'use strict';
const events = require('./events');
require('./manger');
require('./pilot');


events.on('arrived', System);

events.on('take-of', System);
events.on('newfligh', System);


function System (payload) {

    console.log({fligh});
    

};
