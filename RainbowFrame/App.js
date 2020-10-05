"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';

import RainbowFrame  from './components/RainbowFrame';
import RainbowFrameHOC  from './components/RainbowFrameHOC';
import withRainbowFrame from './components/withRainbowFrame';


let colors= ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FragmentComponent = withRainbowFrame(colors)(Fragment);

ReactDOM.render(
  <FragmentComponent>   Hello JS!  </FragmentComponent>  
  , document.querySelector('.rainbow__end')  
);
