"use strict";

import React from 'react'; 
import ReactDOM from 'react-dom';

import IShop from './components/IShop';


let data = require('./data.json');

ReactDOM.render(
  <IShop
    dataSourse={data}
  />, document.querySelector('.ishop__goods')  
);

//  ReactDOM.render(
//    React.createElement(IShop, {dataSourse: data} ), 
//    document.querySelector('.ishop__goods')
//  );