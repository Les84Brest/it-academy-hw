"use strict";

import React, { Fragment } from 'react'; 
import ReactDOM from 'react-dom';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

let colors = ['red', 'OrangeRed', 'yellow', 'green', 'tomato'];
colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let BorderCoomponent = withRainbowFrame(colors)(Fragment);



ReactDOM.render(

  // <BorderCoomponent>Hello</BorderCoomponent>
  <DoubleButton cbPressed={toCons}  caption1="Тот, кто хочет стать пилотом," caption2="Потому что только смелый сам полезет в самолет" > Очень смелый видно тот!</DoubleButton>
  
  , document.querySelector('.rainbow')
);


function toCons(num){
  console.log(num);
}