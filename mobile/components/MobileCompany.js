import React from 'react';
import PropTypes from 'prop-types';
import MobileClient from './MobileClient';

import './MobileCompany.css';




class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  static propTypes = {
    clients: PropTypes.arrayOf(
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
  }

  state = {
    clients: this.props.clients,
  }

  render() {
    console.log('MobileCompany render');

    let clientsList = this.state.clients.map(item => <MobileClient key={item.id} clientInfo={item}/>);
    return (
      <div className="MobileCompany">
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