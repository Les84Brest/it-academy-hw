import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddEditGood.css';

class AddEditGood extends React.Component {

  static MODE_EDIT = 1; // редактирование товара
  static MODE_ADD_NEW = 2; // добавление нового товара

  constructor(props) {
    super(props);

    let otherArgs = {
      btnSaveDisable: null,
      beginEditing: false, // начато ли редактирование карточки
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
      dataSourse = props.dataSourse;

      
    }

   this.state = {dataSourse, ...otherArgs};    
    
  }

  static propTypes = {
    dataSourse: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      totalPrice: PropTypes.number,
      slug: PropTypes.string,
      key: PropTypes.string,
      photo: PropTypes.string, //путь к изображению
      inStock: PropTypes.number, //доступно товара
      id: PropTypes.number, // id товара
    }),

    workMode: PropTypes.number.isRequired, // режим работы компонента
    cbSaveGood: PropTypes.func.isRequired,
    cbCancel: PropTypes.func.isRequired, // если нажата кнопка отмены
    cbStartEditing: PropTypes.func.isRequired, // начало редактирования - команда на недоступность карточек
  }

  /*клики по кнопкам*/
  btnSaveClick = () => {
    //сохраняем введенный товар
    this.props.cbSaveGood({
      name: this.state.dataSourse.name,
      description: this.state.dataSourse.description,
      totalPrice: this.state.dataSourse.totalPrice,
      slug: this.state.dataSourse.slug,
      key: this.state.dataSourse.key,
      photo: this.state.dataSourse.photo,
      inStock: this.state.dataSourse.inStock,
      id: this.state.dataSourse.id,
    })
    this.props.cbStartEditing(false);
  }

  btnCancelClick = () => {
    this.props.cbCancel();
    this.props.cbStartEditing(false);
  }
  /**
   * методы изменения в полях
   */

  onChangeNameInput = (e) => {
    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.name = e.target.value;
    
    this.setState({ dataSourse: newDataSourse});
   
    
  }

  onChangeDescriptionTextArea = (e) => {
    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.description = e.target.value;
    
    this.setState({ dataSourse: newDataSourse});

  }

  onChangePriceInput = (e) => {
    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.totalPrice = parseFloat(e.target.value);
    
    this.setState({ dataSourse: newDataSourse});

   

  }
  onChangeInStockInput = (e) => {
    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.inStock = parseFloat(e.target.value);
    
    this.setState({ dataSourse: newDataSourse});


  }
  onChangePhotoInput = (e) => {

    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.photo = e.target.value;
    
    this.setState({ dataSourse: newDataSourse});

    
    
  }
  onChangeSlugInput = (e) => {

    this.props.cbStartEditing(true);

    let newDataSourse = Object.assign({}, this.state.dataSourse); //копия dataSource
    newDataSourse.slug = e.target.value;
    
    this.setState({ dataSourse: newDataSourse});
            
  }

  validationForm = () =>{

      let btnSaveDisable = false;  // отключать кнопку сэйв

      for (const key in this.state.dataSourse) {
        
        let changeState = new Object();
        
        switch (typeof this.state.dataSourse[key] ) {
          case "string":
            if(this.state.dataSourse[key] == '' || this.state.dataSourse[key] == NaN){
              changeState[key + "ErrorValidation"] = 'Значение не должно быть пустым';
              btnSaveDisable = true;
              this.setState(changeState);
            }else{
              changeState[key + "ErrorValidation"] = null;
              this.setState(changeState);
            }
            break;

            case "number":
              if(this.state.dataSourse[key]  <= 0 || this.state.dataSourse[key] == NaN){
                changeState[key + "ErrorValidation"] = 'Значение должно быть больше нуля';
                btnSaveDisable = true;
                this.setState(changeState);
              }else{
                changeState[key + "ErrorValidation"] = null; 
                this.setState(changeState);
              }
           
            break;
        
          default:
            changeState[key + "ErrorValidation"] = null;
            this.setState(changeState);
            break;
        }
          this.setState({btnSaveDisable: btnSaveDisable}); // Окончательно устанавливаем доступность кнопки сохранить
        
      }
  }

  render() {
   console.log(this.state);
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
          <input type="text" name="GoodName" value={this.state.dataSourse.name} size="50" onChange={this.onChangeNameInput} onBlur={this.validationForm} />
          <span className="add-edit__validation">{this.state.nameErrorValidation}</span>
        </div>
        <div className="add-edit__item">
          <label>Описание</label>
          <textarea type="text-area" rows="3" cols="85" className="add-edit__descr" onChange={this.onChangeDescriptionTextArea} value={this.state.dataSourse.description} onBlur={this.validationForm}></textarea>
          <span className="add-edit__validation">{this.state.descriptionErrorValidation}</span>
        </div>
        <div className="add-edit__item">
          <label>Цена</label>
          <input type="number" value={this.state.dataSourse.totalPrice} onChange={this.onChangePriceInput} onBlur={this.validationForm} />
          <span className="add-edit__validation">{this.state.totalPriceErrorValidation}</span>
        </div>
        <div className="add-edit__item">
          <label>Доступно количество</label>
          <input type="number" value={this.state.dataSourse.inStock} onChange={this.onChangeInStockInput} onBlur={this.validationForm}/>
          <span className="add-edit__validation">{this.state.inStockErrorValidation}</span>
        </div>
        <div className="add-edit__item">
          <label>Ссылка на изображение</label>
          <input type="text" value={this.state.dataSourse.photo} onChange={this.onChangePhotoInput} onBlur={this.validationForm}/>
      <span className="add-edit__validation">{this.state.photoErrorValidation}</span>
        </div>
        <div className="add-edit__item">
          <label>Ссылка (slug)</label>
          <input type="text" value={this.state.dataSourse.slug} onChange={this.onChangeSlugInput} onBlur={this.validationForm} />
          <span className="add-edit__validation">{this.state.slugErrorValidation}</span>
        </div>

        {/* кнопки */}
        <div className="add-edit__buttons">
          {
            (this.props.workMode == AddEditGood.MODE_EDIT)
            ?
            <button className="add-edit__btn save" onClick={this.btnSaveClick} disabled={this.state.btnSaveDisable}>{this.state.btnSaveName.edit}</button>
            :
            <button className="add-edit__btn save" onClick={this.btnSaveClick} disabled={this.state.btnSaveDisable}>{this.state.btnSaveName.addNew}</button>

          }
          
          <button className="add-edit__btn cancel" onClick={this.btnCancelClick}>отмена</button>
        </div>
      </div>


    );
  }
}

export default AddEditGood;
