"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';
let clientsBase = require('./clients.json');





ReactDOM.render(
 <MobileCompany companyData={clientsBase}  />
  , document.querySelector('.Mobile-company')  
);
