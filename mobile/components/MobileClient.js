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
    // управкляем режимом компонента


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

    this.firstName = null;
    this.lastName = null;
    this.secondName = null;
    this.balanse = null;
    this.status = null;

  }

  // ref callbacks

  setLastNameRef = (ref) => {
    this.lastNameRef = ref;
  }
  setSecondNameRef = (ref) => {
    this.secondNameRef = ref;
  }
  setFirstNameRef = (ref) => {
    this.FirstNameRef = ref;
  }
  setBalanseRef = (ref) => {
    this.BalansRef = ref;
  }

 

  componentWillUnmount() {
    console.log('Отписываемся от события');
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
  
 

  handlerSaveClient = () => {
    //обновляем клиента
    console.log(
    
      "маруся"
    );
    console.dir(this.firstNameRef.value);
    let client =  {
      lastName: this.secondNameRef.value,
      firstName: this.firstNameRef.value,
      secondName: this.secondNameRef.value,
      balanse: this.BalansRef.value,
      id: this.state.clientInfo.id,
      status: 'xxx',
    };
    

    console.log('client redacterd');
    console.log(client);
    // if(clientStatus.balanse <=0 ){
    //   client.status = 'blocked';
    // }else{
    //   client.status = 'active';
    // }

    mobileEvents.emit('savingClient', client);
    
    
  }

  handlerEditClient = () => {
    this.setState({workMode: MobileClient.WORKMODE_EDIT});
  }
  handlerEditCancel = () => {
    this.setState({workMode: MobileClient.WORKMODE_SHOW});
  }

  setTextInput = (element) => {
    this.newTextRef = ref;
  }
  setNewText = () => {
    if(this.newTextRef){
      let newText = this.newTextRef.value;
      this.setState()
    }
  }

  render() {
    console.log('MobileClient render');


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
            <td><Button>Удалить</Button></td>
          </tr>

        }
        {
          (this.state.workMode == MobileClient.WORKMODE_EDIT) &&
          <tr className='MobileClient'>
            <td><input type="text" ref={this.setLastNameRef} defaultValue={this.state.clientInfo.lastName}/></td>
             <td><input type="text" ref={this.setFirstNameRef} defaultValue={this.state.clientInfo.firstName}/></td>
             
            <td><input type="text" ref={this.setSecondNameRef} defaultValue={this.state.clientInfo.secondName}/></td>
            <td><input type="number" ref={this.setBalansеRef} defaultValue={parseFloat(this.state.clientInfo.balanse)}/></td> 
            <td> </td>
            <td><Button onClick={this.handlerEditCancel}>Отмена</Button></td>
            <td><Button onClick={ this.handlerSaveClient}>Сохранить</Button></td>
          </tr>
        }
        {

          (this.state.workMode == MobileClient.WORKMODE_NEW) &&
          <div className="MobileClient-new">
            <label className="MobileClient-new__input">Фамилия
              <input type="text" value={this.state.clientInfo.lastName} />
            </label>
            <label className="MobileClient-new__input">Имя
              <input type="text" value={this.state.clientInfo.firstName} />
            </label>
            <label className="MobileClient-new__input">Отчество
              <input type="text" value={this.state.clientInfo.secondName} />
            </label>
            <label className="MobileClient-new__input">Баланс
              <input type="number" value={this.state.clientInfo.secondName} />
            </label>
            <br/>
            <Button>Сохранить</Button>
            <Button>Отмена</Button>
          </div>
        }
      </Fragment>

    )
  }
}

export default MobileClient;