import React from 'react';
import PropTypes from 'prop-types';
import './BR2JSX.css';

class BR2JSX extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  state = {
    textParts: [], // массив с частями фразы
  }
  componentDidMount() { 
    
    if(this.props.text != ''){
      
      let strParts = [];
      let regexp =new RegExp(/(([а-я]*)<?)/gi);
      let matches = this.props.text.match(regexp);
      console.log(matches);
//([а-я]*)(<[a-z0-9]+\s*\/?>)([а-я]*)
    }
  }
  render() {
    return (
      <div className='BR2JSX__content' >
        {this.props.text}
      </div>
    );
  }

}

export default BR2JSX;