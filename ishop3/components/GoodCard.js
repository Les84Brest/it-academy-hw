import React from 'react';
import PropTypes from 'prop-types';


import './GoodCard.css';
/**
 * Карточка товара, которая появляется внизу списка
 */

class GoodCard extends React.Component {

  constructor(props) {
    super(props);
  }
  static propTypes = {

    dataSourse: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      totalPrice: PropTypes.number,
      slug: PropTypes.string,
      key: PropTypes.string,
      photo: PropTypes.string, //путь к изображению
      inStock: PropTypes.number, //доступно товара
      id: PropTypes.number.isRequired,
    }),
  };


  render() {
    

    const { description, inStock, name, photo, totalPrice } = this.props.dataSourse;
    return (
      <div className="good-card">
        <h2 className="good-card__title">{name}</h2>

        <div className="good-card__wrapper">
          <img className="good-card__image" src={photo} />
          <div className="good-card__content">
            <div className="good-card__line">
              <span className="good-card__name">Описание</span>
              <div className="span good-card__charact">{description}</div>

            </div>
            <div className="good-card__line">
              <span className="good-card__name">Цена</span>
              <div className="span good-card__charact">{totalPrice}</div>

            </div>
            <div className="good-card__line">
              <span className="good-card__name">Кол-во товара</span>
              <div className="span good-card__charact">{inStock}</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default GoodCard;