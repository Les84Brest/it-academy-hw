import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import Button from './Button';
import mobileEvents from './mobileEvents';

import './MobileCompany.css';




class MobileCompany extends React.PureComponent {

  static FILTER_ALL = 1;
  static FILTER_ACTIVE = 2;
  static FILTER_BLOCKED = 3;

  constructor(props) {
    super(props);

    //события

    mobileEvents.on('filterShowAll', this.handlerFilterShowAll);
    mobileEvents.on('filterShowActive', this.handlerFilterShowActive);
    mobileEvents.on('filterShowBlocked', this.handlerFilterShowBlocked);
    mobileEvents.on('addingNewClient', this.handlerAddNewClient);
    mobileEvents.on('savingClient', this.handlerSaveClient);
    mobileEvents.on('deletingClient', this.handlerDeleteClient);
    mobileEvents.on('addNewClientCancel', this.handlerAddNewClientCancel);

  }

  componentWillUnmount() {
    mobileEvents.off('filterShowAll', this.handlerFilterShowAll);
    mobileEvents.off('filterShowActive', this.handlerFilterShowActive);
    mobileEvents.off('filterShowBlocked', this.handlerFilterShowBlocked);
    mobileEvents.off('addingNewClient', this.handlerAddNewClient);
    mobileEvents.off('savingClient', this.handlerSaveClient);
    mobileEvents.off('deletingClient', this.handlerDeleteClient);
    mobileEvents.off('addNewClientCancel', this.handlerAddNewClientCancel);
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
    clients: this.props.companyData.MTS, // набор клиентов для текущей работы
    clientsBackup: this.props.companyData.MTS, // сохранение исходного набора клиентов
    addNewClientMode: false,
    filterType: MobileCompany.FILTER_ALL, 
  } 

  handlerAddNewClientCancel = () => { this.setState({ addNewClientMode: false }) };

  handlerDeleteClient = (id) => {
    let items = [... this.state.clients];
    let deleteIndex = items.findIndex((item) => item.id == id);
    items.splice(deleteIndex, 1);
    this.setState({ clients: items });

  }
  handlerSaveClient = (client) => {
    
    let clientItems = [...this.state.clientsBackup];

    let clientId = clientItems.findIndex(item => item.id == client.id);

    if (clientId == -1) {
      // не нашли индекс - добавляем в конец и рендерим
      clientItems = [... clientItems, client];
      this.setState({ clients: clientItems, clientsBackup: clientItems ,addNewClientMode: false, });

    } else {

      clientItems.splice(clientId, 1, client);

      this.setState({ clients: clientItems });
    }
   

  }

  handlerAddNewClient = () => {


    this.setState({ addNewClientMode: true });
  }

  handlerChangeCompany = (e) => {
    e.preventDefault();

    // отрабатываем фильтр
    let filterCallBack = null;
    switch(this.state.filterType){
      case MobileCompany.FILTER_ACTIVE:
        filterCallBack = this.handlerFilterShowActive;
      case MobileCompany.FILTER_BLOCKED:
        filterCallBack = this.handlerFilterShowBlocked;
        break;

    }

    let newProps = {
      currentCompany: e.target.dataset.company,
      clientsBackup: this.props.companyData[e.target.dataset.company],
      clients: this.props.companyData[e.target.dataset.company],
    }
    //отрабатываем включенные фильтры
    
    this.setState(newProps, filterCallBack);
  }

  handlerFilterShowActive = () => {


    let activeClients = this.state.clientsBackup;
    activeClients = activeClients.filter((item) => {
      if (item.status == 'active') {
        return item;
      }

    });

    this.setState({ clients: activeClients, filterType: MobileCompany.FILTER_ACTIVE,});

  }

  handlerFilterShowBlocked = () => {

    let blockedClients = this.state.clientsBackup;
    blockedClients = blockedClients.filter((item) => {
      if (item.status == 'blocked') {
        return item;
      }

    });
    
    this.setState({ clients: blockedClients, filterType: MobileCompany.FILTER_BLOCKED });

  }

  handlerFilterShowAll = () => {
    let allClients = [...this.state.clientsBackup];
    this.setState({ clients: allClients, filterType: MobileCompany.FILTER_ALL });
    
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
            <Button onClick={() => { mobileEvents.emit('filterShowAll') }}>Все</Button>
            <Button onClick={() => { mobileEvents.emit('filterShowActive') }}  >Активные</Button>
            <Button onClick={() => { mobileEvents.emit('filterShowBlocked') }}>Заблокированные</Button>

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
        <Button onClick={() => { mobileEvents.emit('addingNewClient', this.handlerAddNewClient) }}>Добавить нового</Button>
        {
          (this.state.addNewClientMode) &&
          <MobileClient clientInfo={null} />
        }
      </div>
    )
  }
}

export default MobileCompany;