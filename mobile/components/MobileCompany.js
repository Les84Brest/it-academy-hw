import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './MobileCompany.css';
import MobileClient from './MobileClient';



class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    console.log('MobileCompany render');
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
            <MobileClient />
            <MobileClient />
            <MobileClient />
            
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default MobileCompany;