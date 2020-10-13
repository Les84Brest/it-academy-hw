import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './MobileClient.css';



class MobileClient extends React.PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    console.log('MobileClient render');
    return (
      <tr className='MobileClient'>
        <td>Иванов</td>
        <td>Иван</td>
        <td>Константинович</td>
        <td>350,99</td>
        <td className="active">active</td>
        <td><Button>Редактировать</Button></td>
        <td><Button>Удалить</Button></td>
      </tr>
    )
  }
}

export default MobileClient;