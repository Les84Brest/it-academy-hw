import { Component } from "react";

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';

class AddEditGood extends React.Component{

  static MODE_EDIT = 1; // редактирование данных товара
  static MODE_ADD_NEW = 2; //добавление нового товара

  constructor(props){
    super(props);

    this.state.workMode = props.workMode;
  }

  static propTypes = {     
    dataSourse: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        totalPrice: PropTypes.number, 
        slug: PropTypes.string,
        key: PropTypes.string,
        photo: PropTypes.string, //путь к изображению
        inStock: PropTypes.string, //доступно товара
        id: PropTypes.number, // id товара
      }),
    ).isRequired,
    workMode: PropTypes.number.isRequired, // режим работы компонента
     
  }

  

  render(){

  }
}


export default AddEditGood;
