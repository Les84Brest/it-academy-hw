"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';

import MobileApp from './components/MobileApp';
let clientsBase = require('./clients.json');





ReactDOM.render(
 <MobileApp companyData={clientsBase}  />
  , document.querySelector('.Mobile-company')  
);
