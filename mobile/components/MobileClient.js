import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from './Button';

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

    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.secondName = React.createRef();
    this.balanse = React.createRef();
    this.status = React.createRef();

  }

  componentDidMount() {
    console.log("Подписываемся на событие");

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

  render() {
    console.log('MobileClient render');

    return (
      <Fragment>
        {

          (this.state.workMode == MobileClient.WORKMODE_SHOW) &&
          <tr className='MobileClient'>
            <td ref={this.lastName}>{this.state.clientInfo.lastName}</td>
            <td ref={this.firstName}>{this.state.clientInfo.firstName}</td>
            <td ref={this.secondName}>{this.state.clientInfo.secondName}</td>
            <td ref={this.balanse}>{this.state.clientInfo.balanse}</td>
            <td ref={this.status} className={classNames({ active: this.state.clientInfo.balanse > 0, blocked: this.state.clientInfo.balanse <= 0 })} >{this.state.clientInfo.status}</td>
            <td><Button onClick={() => { mobileEvents.emmit }}>Редактировать</Button></td>
            <td><Button>Удалить</Button></td>
          </tr>

        }
        {
          (this.state.workMode == MobileClient.WORKMODE_EDIT) &&
          <tr className='MobileClient'>
            <td><input type="text" value={this.state.clientInfo.lastName} /></td>

            <td><Button>Сохранить</Button></td>
            <td><Button>Отмена</Button></td>
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