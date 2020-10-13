import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

import './MobileClient.css';



class MobileClient extends React.PureComponent {

  constructor(props) {
    super(props);

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
    clientInfo : this.props.clientInfo,
  }

  render() {
    console.log('MobileClient render');
    
    return (
      <tr className='MobileClient'>
        <td>{this.state.clientInfo.lastName}</td>
        <td>{this.state.clientInfo.firstName}</td>
        <td>{this.state.clientInfo.secondName}</td>
        <td>{this.state.clientInfo.balanse}</td>
        <td className="active">{this.state.clientInfo.status}</td>
        <td><Button>Редактировать</Button></td>
        <td><Button>Удалить</Button></td>
      </tr>
    )
  }
}

export default MobileClient;