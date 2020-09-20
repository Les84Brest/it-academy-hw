import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';

class AddEditGood extends React.Component {

  static MODE_EDIT = 2; // редактирование товара
  static MODE_ADD_NEW = 3; // добавление нового товара

  constructor(props) {
    super(props);

    let otherArgs = {
      tnSaveDisable: null,
      modeTitle: {
        edit: "Редактируем данные",
        addNew: "Новый товар",
      },
      btnSaveName: {
        edit: 'Сохранить',
        addNew: 'Добавить новый',
      },
    };
    let dataSourse;
    if (props.workMode == AddEditGood.MODE_ADD_NEW && props.dataSourse == null) {
      dataSourse = {
        name: '',
        description: '',
        totalPrice: 0,
        slug: '',
        key: Math.random().toString(),
        photo: '',
        inStock: 0,
        id: Math.random(),
       
      }
    } else {
      const { name, description, totalPrice, slug, key, photo, inStock, id, } = props.dataSourse;

      dataSourse = {
        name, description, totalPrice, slug, key, photo, inStock, id,
       
      }
    }

   this.state = {...dataSourse, ...otherArgs};
    
    
  }

  static propTypes = {
    dataSourse: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      totalPrice: PropTypes.number,
      slug: PropTypes.string,
      key: PropTypes.string,
      photo: PropTypes.string, //путь к изображению
      inStock: PropTypes.string, //доступно товара
      id: PropTypes.number, // id товара
    }),

    workMode: PropTypes.number.isRequired, // режим работы компонента
    cbSaveGood: PropTypes.func.isRequired,
    cbCancel: PropTypes.func.isRequired, // если нажата кнопка отмены
  }

  /*клики по кнопкам*/
  btnSaveClick = (e) => {
    //сохраняем введенный товар
    this.props.cbSaveGood({
      name: this.state.name,
      description: this.state.description,
      totalPrice: this.state.totalPrice,
      slug: this.state.slug,
      key: this.state.key,
      photo: this.state.photo,
      inStock: this.state.inStock,
      id: this.state.id,
    })
  }

  btnCancelClick = (e) => {
    this.props.cbCancel();
  }
  /**
   * методы изменения в полях
   */

  onChangeNameInput = (e) => {

    this.setState({ name: e.target.value });
  }

  onChangeDescriptionTextArea = (e) => {
    this.setState({ description: e.target.value });
  }

  onChangePriceInput = (e) => {

    this.setState({ totalPrice: parseFloat(e.target.value) });
  }
  onChangeInStockInput = (e) => {

    this.setState({ inStock: parseFloat(e.target.value) });
  }
  onChangePhotoInput = (e) => {

    this.setState({ photo: e.target.value });
  }
  onChangeSlugInput = (e) => {

    this.setState({ slug: e.target.value });
  }

  render() {
    console.log('режим ' + this.state.workMode);
    return (

      <div className="add-edit">
        {
          (this.props.workMode == AddEditGood.MODE_EDIT)
            ?
            <h2 className="add-edit__title"> {this.state.modeTitle.edit}</h2>
            :
            <h2 className="add-edit__title"> {this.state.modeTitle.addNew}</h2>

        }

        <div className="add-edit__item">
          <label>Название товара</label>
          <input type="text" name="GoodName" value={this.state.name} size="50" onChange={this.onChangeNameInput} />
          <span className="add-edit__validation">текст валидации</span>
        </div>
        <div className="add-edit__item">
          <label>Описание</label>
          <textarea type="text-area" rows="3" cols="85" className="add-edit__descr" onChange={this.onChangeDescriptionTextArea} value={this.state.description}></textarea>
          <span className="add-edit__validation">текст валидации</span>
        </div>
        <div className="add-edit__item">
          <label>Цена</label>
          <input type="number" value={this.state.totalPrice} onChange={this.onChangePriceInput} />
          <span className="add-edit__validation">текст валидации</span>
        </div>
        <div className="add-edit__item">
          <label>Доступно количество</label>
          <input type="number" value={this.state.inStock} onChange={this.onChangeInStockInput} />
          <span className="add-edit__validation">текст валидации</span>
        </div>
        <div className="add-edit__item">
          <label>Ссылка на изображение</label>
          <input type="text" value={this.state.photo} onChange={this.onChangePhotoInput} />
          <span className="add-edit__validation">текст валидации</span>
        </div>
        <div className="add-edit__item">
          <label>Ссылка (slug)</label>
          <input type="text" value={this.state.slug} onChange={this.onChangeSlugInput} />
          <span className="add-edit__validation">текст валидации</span>
        </div>

        {/* кнопки */}
        <div className="add-edit__buttons">
          {
            (this.props.workMode == AddEditGood.MODE_EDIT)
            ?
            <button className="add-edit__btn save" onClick={this.btnSaveClick}>{this.state.btnSaveName.edit}</button>
            :
            <button className="add-edit__btn save" onClick={this.btnSaveClick}>{this.state.btnSaveName.addNew}</button>

          }
          
          <button className="add-edit__btn cancel" onClick={this.btnCancelClick}>отмена</button>
        </div>
      </div>


    );
  }
}

export default AddEditGood;
