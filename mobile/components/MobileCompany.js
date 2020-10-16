import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import Button from './Button';
import EventEmmiter from 'events';

import './MobileCompany.css';




class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);
    

    //события
    this.mobileEvents = new EventEmmiter();
    this.mobileEvents.on('filterShowAll', this.handlerFilterDisplayAll);
    this.mobileEvents.on('filterShowActive', this.handlerFilterDisplayActive);

  }

  

  static propTypes = {
    companyData: PropTypes.objectOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          lastName: PropTypes.string,
          firstName: PropTypes.string,
          secondName: PropTypes.string,
          balanse: PropTypes.number,
          id: PropTypes.number,
          status: PropTypes.string,
        }
        )
      )
    )
  }

  state = {
    currentCompany: "MTS",
    clients: this.props.companyData.MTS,

  }

  handlerChangeCompany = (e) => {
    e.preventDefault();
    
    let newProps = {
      currentCompany: e.target.dataset.company,
      clients: this.props.companyData[e.target.dataset.company],
    }
    this.setState(newProps);
  }
  handlerFilterDisplayActive = () => {
    let activeClients=[...this.props.companyData[this.state.currentCompany]].filter(item => {
      if (item.status == 'active') {
        return item;
      }
      this.setState({clients: activeClients});
    });

  }
  handlerFilterDisplayAll = () => {
    let allClients = [...this.props.companyData[this.state.currentCompany]];
    this.setState({clients: allClients});
    console.log(allClients);
  }
 

  render() {
    console.log('MobileCompany render');

    let clientsList = this.state.clients.map(item => <MobileClient key={item.id} clientInfo={item} />);
    return (
      <div className="MobileCompany">
        <div className="MobileCompany__header section">
          <div className="MobileCompany__company-change section">
            <Button onClick={this.handlerChangeCompany} data-company="MTS">MTS</Button>
            <Button onClick={this.handlerChangeCompany} data-company="velcom">Velcom</Button>
            <h2>{`Название компании - ${this.state.currentCompany}`}</h2>
          </div>
          <div className="MobileCompany__filter section">
            <Button onClick={() => {this.mobileEvents.emit('filterShowAll')}}>Все</Button>
            <Button>Активные</Button>
            <Button>Заблокированные</Button>

          </div>

        </div>
        <table>
          <thead>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
              <td>Баланс</td>
              <td>Статус</td>
              <td>Редактировать</td>
              <td>Удалить</td>

            </tr>
          </thead>
          <tbody>

            {clientsList}

          </tbody>
        </table>
        <Button>Добавить нового</Button>
      </div>
    )
  }
}

export default MobileCompany;