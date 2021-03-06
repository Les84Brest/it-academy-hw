import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import GoodItem from './GoodItem';
import GoodCard from './GoodCard';
import AddEditGood from './AddEditGood';
import Button from './Button';
import Icon from './Icon';


import './iShop.css';

class IShop extends React.Component {

  static MODE_SHOW = 1; // показать товар
  static MODE_EDIT = 2; // редактирование товара
  static MODE_ADD_NEW = 3; // добавление нового товара
  static MODE_DEFAULT = 4; // добавление нового товара

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
        inStock: PropTypes.number, //доступно товара
        id: PropTypes.number, // id товара
      }),
    ).isRequired,

  }

  state = {
    selectId: null,
    goods: this.props.dataSourse.slice(0), // копия массива в goods
    workMode: IShop.MODE_DEFAULT, // по умолчанию моагазин в режиме просто показать таовары
    displayDetails: null, // изначально детали товара не показываем
    editedGood: null, // товар который редактируем
    disableItemControls: false,
  };

  selectedGood = (id) => {
    // отрабатываем клик только магазин не в режиме редактирования или добавления товара
    if (this.state.workMode == IShop.MODE_EDIT || this.state.workMode == IShop.MODE_ADD_NEW) {
      return;
    } else {
      let displayGood = this.state.goods.find(item => item.id == id);
      this.setState({ selectId: id, displayDetails: displayGood, workMode: IShop.MODE_SHOW, disableItemControls: false });
    }
  }

  deletedGood = (id) => {

    let arrWODelGoods = this.state.goods.filter(item => {
      return !(item.id == id);
    })

    this.setState({
      goods: arrWODelGoods,
      displayDetails: null,
      workMode: IShop.MODE_DEFAULT, // товар удален переключаемся в обычный режим без выделения  
      selectId: null,
      displayDetails: null, // изначально детали товара не показываем
      editedGood: null,
    });
  }


  addNewGood = () => {
    // добавляем новый товар, выделение строки снимается
    this.setState({ workMode: IShop.MODE_ADD_NEW, selectId: null, displayDetails: null,  });
  }
  /**callback данные товара изменены - запретить создание и редактирование новых */
  startEditGood = (btnState) => {

    this.setState({ disableItemControls: btnState,  });

  }
  

  editGood = (id) => {
    let editGood = this.state.goods.find(item => item.id == id);
    
    this.setState({ editedGood: editGood, workMode: IShop.MODE_EDIT, displayDetails: null, selectId: null });
  }

  saveGood = (good) => { // callback на сохранение товара
    if (good == null) { // если передан null значит нужно закрыть редактирование товара
      this.setState({ workMode: IShop.MODE_DEFAULT, editedGood: null })
      return;
    }
   
    let changedGoods = this.state.goods.slice();
    //если в режиме добавления ногового товара то просто добавляем товар в конец
    if(this.state.workMode == IShop.MODE_ADD_NEW){
      changedGoods.push(good);
      this.setState({goods: changedGoods, editedGood: null, workMode: IShop.MODE_DEFAULT});
      return;

    }

    let goodKey = changedGoods.findIndex(item => item.id == good.id);
    changedGoods.splice(goodKey, 1, good);
    this.setState({ goods: changedGoods, editedGood: null, workMode: IShop.MODE_DEFAULT });

  }

  editCanceled = () => {
    this.setState({ workMode: IShop.MODE_DEFAULT, editedGood: null });
  }



  render() {
    let goodsForRender = [];
    this.state.goods.forEach(element => {
      let good = <GoodItem key={element.id}
        goodId={element.id}
        dataSourse={element}
        cbSelectedGood={this.selectedGood}
        cbDeletedGood={this.deletedGood}
        cbEditGood={this.editGood}
        selectedGoodId={this.state.selectId}
        disableItemControls={this.state.disableItemControls}
      />

      goodsForRender.push(good);

    });


    /*убрать */
    switch (this.state.workMode) {
      case IShop.MODE_ADD_NEW:
        console.log('Режим новый товар');
        break;
      case IShop.MODE_EDIT:
        console.log('Режим редактирование');
        break;
      case IShop.MODE_SHOW:
        console.log('Режим выделение строки');
        break;

      default:
        console.log('Режим по умолчанию');
        break;
    }
    /*убрать */

    return (
      <div className="ishop__goods-list goods-list">
        <Icon name="atom" onClick={()=>{confirm('how are you')}}></Icon>
        {goodsForRender}
        {/* доступность кнопки товаров */}
        {
          (this.state.workMode == IShop.MODE_EDIT || this.state.workMode == IShop.MODE_ADD_NEW)
            ?
            <Button  onClick={this.addNewGood} disabled> новый товар </Button>
            :
            <Button  onClick={this.addNewGood} > новый товар </Button>
        }

        {/* подробности по товару */}
        {
          (this.state.displayDetails != null && this.state.workMode == IShop.MODE_SHOW) &&
          <GoodCard dataSourse={this.state.displayDetails} />
        }
        {/* редактируем товар */}
        {
          (this.state.editedGood != null && this.state.workMode == IShop.MODE_EDIT) &&
          <AddEditGood dataSourse={this.state.editedGood} cbSaveGood={this.saveGood} cbCancel={this.editCanceled} workMode={AddEditGood.MODE_EDIT} cbStartEditing={this.startEditGood} />
        }
        {
          (this.state.workMode == IShop.MODE_ADD_NEW) &&
          <AddEditGood dataSourse={null} cbSaveGood={this.saveGood}  cbCancel={this.editCanceled} workMode={AddEditGood.MODE_ADD_NEW} cbStartEditing={this.startEditGood} />
        }
      </div>

    );

  }
}

export default IShop;