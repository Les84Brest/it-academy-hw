import React from 'react';
import PropTypes from 'prop-types';

import CurrentCompanyDisplay from './CurrentCompanyDisplay';

import Button from './Button';
import './MobileApp.css';


class MobileApp extends React.Component {
 


  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="MobileApp">
        <div className="MobileApp__header sect ">
          <div className="MobileApp__company-nav">
            <Button>Velcom</Button>
            <Button>MTS</Button>
          </div>
           <CurrentCompanyDisplay/> {/* показываем текущую компанию */}
        </div>
        <div className="MobileApp__sort sect ">
            <Button>Все</Button>
            <Button>Активные</Button>
            <Button>Заблокированные</Button>
        </div>
        <div className="MobileApp__add sect ">
            <Button>Добавить клиента</Button>
            
        </div>
      </div>
    )
  }
}

export default MobileApp;