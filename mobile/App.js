"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';

import MobileApp from './components/MobileApp';
let clientsBase = require('./clients.json');
console.log(clientsBase);


let companyName = 'MTS';

ReactDOM.render(
 <MobileApp clients={clientsBase} companyName={companyName} />
  , document.querySelector('.Mobile-company')  
);
