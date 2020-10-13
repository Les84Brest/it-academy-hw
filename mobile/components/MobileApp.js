import React from 'react';
import PropTypes from 'prop-types';

import CurrentCompanyDisplay from './CurrentCompanyDisplay';

import Button from './Button';

import './MobileApp.css';
import MobileCompany from './MobileCompany';


class MobileApp extends React.PureComponent {
 
 constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    console.log('MobileApp render');
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
        <div className="MobileApp__company sect ">
          <MobileCompany/>
        </div>
        <div className="MobileApp__add sect ">
            <Button>Добавить клиента</Button>
            
        </div>
      </div>
    )
  }
}

export default MobileApp;