import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

import mobileEvents from './mobileEvents';

import './MobileClient.css';



class MobileClient extends React.PureComponent {

  static WORKMODE_SHOW = 1;
  static WORKMODE_EDIT = 2;
  static WORKMODE_NEW = 3;

  constructor(props) {
    super(props);
    // управляем режимом компонента


    if (props.clientInfo == null) {
      this.state.workMode = MobileClient.WORKMODE_NEW;
      // build new client hash for state

      this.state.clientInfo = {
        lastName: '',
        firstName: '',
        secondName: '',
        balanse: '',
        id: Math.floor(Math.random() * 100000),
        status: '',
      };
    }

    //refs

    this.firstNameRef = null;
    this.lastNameRef = null;
    this.secondNameRef = null;
    this.balanseRef = null;
    
    //new client
    this.firstNameNewRef = null;
    this.lastNameNewRef = null;
    this.secondNameNewRef = null;
    this.balanseNewRef = null;
    

  }

  // ref callbacks


  setLastNameRef = (ref) => {
    this.lastNameRef = ref;
  }
  setSecondNameRef = (ref) => {
    this.secondNameRef = ref;
  }
  setFirstNameRef = (ref) => {
    this.firstNameRef = ref;
  }
  setBalanseRef = (ref) => {
    this.balanseRef = ref;
  }
// new client ref
  setLastNameNewRef = (ref) => {
    this.lastNameNewRef = ref;
  }
  setSecondNameNewRef = (ref) => {
    this.secondNameNewRef = ref;
  }
  setFirstNameNewRef = (ref) => {
    this.firstNameNewRef = ref;
    console.log(this.firstNameNewRef); 
  }
  setBalanseNewRef = (ref) => {
    console.log("ref balanse new");
    this.balanseNewRef = ref;
    console.log(this.balanseNewRef);
  }


  static propTypes = {

    clientInfo: PropTypes.shape({
      lastName: PropTypes.string,
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      balanse: PropTypes.number,
      id: PropTypes.number,
      status: PropTypes.string,
    }
    )

  }

  state = {
    clientInfo: this.props.clientInfo,
    workMode: MobileClient.WORKMODE_SHOW,
  }


  componentDidUpdate = () =>{
    
    this.setState({clientInfo: this.props.clientInfo});
  }

  handlerSaveNewClient = () => {

    let client = { ...this.state.clientInfo };
   console.log(this.balanseNewRef.value); 

    client.lastName = this.lastNameNewRef.value;
    client.firstName = this.firstNameNewRef.value;
    client.secondName = this.secondNameNewRef.value;
    client.balanse = parseFloat(this.balanseNewRef.value);

    if (client.balanse <= 0) {
      client.status = 'blocked';
    } else {
      client.status = 'active';
    }

    mobileEvents.emit('savingClient', client);
    //переключаем отображение на показ 
    this.setState({ workMode: MobileClient.WORKMODE_SHOW });
  }

  handlerSaveClient = () => {
    //копия клиента из state
    let client = { ...this.state.clientInfo };


    client.lastName = this.lastNameRef.value;
    client.firstName = this.firstNameRef.value;
    client.secondName = this.secondNameRef.value;
    client.balanse = parseFloat(this.balanseRef.value);

    if (client.balanse <= 0) {
      client.status = 'blocked';
    } else {
      client.status = 'active';
    }

    mobileEvents.emit('savingClient', client);
    //переключаем отображение на показ 
    this.setState({ workMode: MobileClient.WORKMODE_SHOW });

  }

  handlerEditClient = () => {
    this.setState({ workMode: MobileClient.WORKMODE_EDIT });
  }
  handlerEditCancel = () => {
    this.setState({ workMode: MobileClient.WORKMODE_SHOW });
  }

  setTextInput = (element) => {
    this.newTextRef = ref;
  }


  render() {
    console.log('MobileClient render. ID - ' + this.state.clientInfo.id);


    return (
      <Fragment>
        {

          (this.state.workMode == MobileClient.WORKMODE_SHOW) &&
          <tr className='MobileClient'>
            <td >{this.state.clientInfo.lastName}</td>
            <td >{this.state.clientInfo.firstName}</td>
            <td >{this.state.clientInfo.secondName}</td>
            <td >{this.state.clientInfo.balanse}</td>
            <td className={classNames({ active: this.state.clientInfo.balanse > 0, blocked: this.state.clientInfo.balanse <= 0 })} >{this.state.clientInfo.status}</td>
            <td><Button onClick={this.handlerEditClient}>Редактировать</Button></td>
            <td><Button onClick={()=>{mobileEvents.emit('deletingClient', this.state.clientInfo.id)}}>Удалить</Button></td>
          </tr>

        }
        {
          (this.state.workMode == MobileClient.WORKMODE_EDIT) &&
          <tr className='MobileClient'>
            <td><input type="text" ref={this.setLastNameRef} defaultValue={this.state.clientInfo.lastName} /></td>
            <td><input type="text" ref={this.setFirstNameRef} defaultValue={this.state.clientInfo.firstName} /></td>

            <td><input type="text" ref={this.setSecondNameRef} defaultValue={this.state.clientInfo.secondName} /></td>
            <td><input type="number" ref={this.setBalanseRef} defaultValue={parseFloat(this.state.clientInfo.balanse)} /></td>
            <td> </td>
            <td><Button onClick={this.handlerEditCancel}>Отмена</Button></td>
            <td><Button onClick={this.handlerSaveClient}>Сохранить</Button></td>
          </tr>
        }
        {

          (this.state.workMode == MobileClient.WORKMODE_NEW) &&
          <div className="MobileClient-new">
            <label className="MobileClient-new__input">Фамилия
              <input type="text" ref={this.setLastNameNewRef} defaultValue="" />
            </label>
            <label className="MobileClient-new__input">Имя
              <input type="text" ref={this.setFirstNameNewRef}  defaultValue="" />
            </label>
            <label className="MobileClient-new__input">Отчество
              <input type="text" ref={this.setSecondNameNewRef}  defaultValue="" />
            </label>
            <label  className="MobileClient-new__input">Баланс
              <input type="number" ref={this.setBalanseNewRef}  defaultValue="" />
            </label>
            <br />
            <Button onClick={this.handlerSaveNewClient}>Сохранить</Button>
            <Button onClick={()=>{mobileEvents.emit('addNewClientCancel')}}>Отмена</Button>
          </div>
        }
      </Fragment>

    )
  }
}

export default MobileClient;