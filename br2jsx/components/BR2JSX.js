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

    if (this.props.text != '') {

      let strParts = [];
      let regexp = new RegExp(/[а-я]+/gi); // поиск просто букв,а не тегов в данной фразе
      let matches = this.props.text.match(regexp);
      console.log(matches);
      let tempArr = [];

      matches.forEach((element, index, matchArray) => {
        
        if (index < matchArray.length - 1) { // -1 чтобы в последнем куске не добавилось <br>
          tempArr.push(element);
          tempArr.push(<br key={index}/>);
          
        }else{
          tempArr.push(element);
        }
      });
      this.setState({ textParts: tempArr });
      
    }
  }
  render() {
    return (
      <div className='BR2JSX__content' >
        {this.state.textParts}
      </div>
    );
  }

}

export default BR2JSX;