import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import GoodItem from './GoodItem';
import GoodCard from './GoodCard';


import './iShop.css';

class IShop extends React.Component {

  static MODE_SHOW = 1; // показать товар
  static MODE_EDIT = 2; // редактирование товара
  static MODE_ADD_NEW = 3; // добавление нового товара

  constructor(props) {
    super(props);

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

  }

  state = {
    selectId: null,
    goods: this.props.dataSourse.slice(0), // копия массива в goods
    workMode: this.MODE_SHOW, // по умолчанию моагазин в режиме просто показать таовары
    displayDetails: null, // изначально деталит товара не показываем
  };

  selectedGood = (id) => {
    let displayGood = this.state.goods.find(item => item.id == id);

    this.setState({ selectId: id, displayDetails: displayGood, });

  }

  deletedGood = (id) => {

    let arrWODelGoods = this.state.goods.filter(item => {
      return !(item.id == id);
    })
    this.setState({ goods: arrWODelGoods, displayGood: null });
  }

  addNewGood = () => {
    alert('Добавляем новый товар');
  }

  render() {
    let goodsForRender = [];
    this.state.goods.forEach(element => {
      let good = <GoodItem key={element.id}
        goodId={element.id}
        dataSourse={element}
        cbSelectedGood={this.selectedGood}
        cbDeletedGood={this.deletedGood}
        selectedGoodId={this.state.selectId}
      />

      goodsForRender.push(good);

    });
    console.log(this.state.displayDetails);
    return (
      <div className="ishop__goods-list goods-list">
        {goodsForRender}
        <button className="ishop__goods-btn add" onClick={this.addNewGood}> новый товар </button>
        {
          (this.state.displayDetails != null) &&
            <GoodCard dataSourse={this.state.displayDetails}/>

        }

      </div>

    );

  }
}

export default IShop;