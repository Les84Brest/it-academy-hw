"use strict";

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let otherColors = ['Crimson', 'DeepPink', 'Olive', 'Aqua', 'DarkViolet', 'MediumBlue', 'Chocolate'];
let BorderCoomponent = withRainbowFrame(colors)(DoubleButton);
let FragmentBorder = withRainbowFrame(otherColors)(Fragment);



ReactDOM.render(
  <Fragment>
    <BorderCoomponent cbPressed={toCons} caption1="Кто мечтает быть пилотом, " caption2="Потому что только смелый сам полезет в самолет" > Очень смелый видно тот! </BorderCoomponent>
    <FragmentBorder>Hello World!</FragmentBorder>
  </Fragment>

  , document.querySelector('.rainbow')
);


function toCons(num) {
  console.log(num);
}