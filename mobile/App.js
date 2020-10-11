"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';

import MobileApp from './components/MobileApp';
let clientsBase = require('./clients.json');
console.log(clientsBase);

ReactDOM.render(
 <MobileApp clients={clientsBase} />
  , document.querySelector('.Mobile-company')  
);
