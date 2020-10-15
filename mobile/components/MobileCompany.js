import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';
import Button from './Button';

import './MobileCompany.css';




class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);

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

  handlerChangeCompany = (companyName) => {
    let newProps = {currentCompany: companyName,
    clients: this.props.companyData[companyName],
  }
  this.setState(newProps);
  }

  render() {
    console.log('MobileCompany render');

    let clientsList = this.state.clients.map(item => <MobileClient key={item.id} clientInfo={item} />);
    return (
      <div className="MobileCompany">
        <div className="MobileCompany__header section">
          <div className="MobileCompany__company-change section">
            <Button onClick={this.handlerChangeCompany}>MTS</Button>
            <Button onClick={this.handlerChangeCompany}>Velcom</Button>
            <h2>{`Название компании - ${this.state.currentCompany}`}</h2>
          </div>
          <div className="MobileCompany__filter section">
            <Button>Все</Button>
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
      </div>
    )
  }
}

export default MobileCompany;