"use strict";

import React from 'react'; 
import ReactDOM from 'react-dom';

import RainbowFrame  from './components/RainbowFrame';

import ColorFrame from './components/ColorFrame';
import Button from './components/Button';


let colors= ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
ReactDOM.render(
  <RainbowFrame colors={colors}>Hello!</RainbowFrame>
  // <ColorFrame color="tomato">надпись</ColorFrame>
  , document.querySelector('.rainbow__end')  
);
