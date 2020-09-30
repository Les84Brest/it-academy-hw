"use strict";

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';



import BR2JSX from './components/BR2JSX';
import Button from './components/Button';



let text = 'первый<br>второй<br/>третий<br />последний';

ReactDOM.render(
  
    <BR2JSX text={text} />
    
  


  , document.querySelector('.rainbow__end')
);
