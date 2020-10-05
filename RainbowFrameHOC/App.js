"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';
import withRainbowFrame from './components/withRainbowFrame';

let colors = ['red', 'OrangeRed', 'yellow', 'green', 'tomato'];
colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let BorderCoomponent = withRainbowFrame(colors)(Fragment);

ReactDOM.render(
  <BorderCoomponent>Hello</BorderCoomponent>
  , document.querySelector('.rainbow')
);
