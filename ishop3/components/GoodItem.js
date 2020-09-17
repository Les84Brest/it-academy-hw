import React from 'react';
import PropTypes from 'prop-types';

import "./GoodItem.css";


class GoodItem extends React.Component {

  static propTypes = {
    cbSelectedGood: PropTypes.func.isRequired,
    cbDeletedGood: PropTypes.func.isRequired,
    selectedGoodId: PropTypes.number,
    dataSourse: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      totalPrice: PropTypes.number,
      slug: PropTypes.string,
      key: PropTypes.string,
      photo: PropTypes.string, //путь к изображению
      inStock: PropTypes.string, //доступно товара
      id: PropTypes.number.isRequired,
    }),
  };
  constructor(props) {
    super(props);
  }

  state = {
    goodClases: { default: 'ishop__item', selected: 'ishop__item row-selected' }, // 
  };

  rowOnClick = () => {
    this.props.cbSelectedGood(this.props.dataSourse.id);
  }

  rowOnDelete = () => {
    if (confirm(`Вы действительно хотите удалить ${this.props.dataSourse.name} ?`)) {
      this.props.cbDeletedGood(this.props.dataSourse.id);
      return;
    }
  }

  render() {
    let classItem = this.state.goodClases.default;
    if (this.props.selectedGoodId == this.props.goodId) {// проверяем выделен ли товар
      classItem = this.state.goodClases.selected;
    }
    return (
      <div
        className={classItem}
        onClick={this.rowOnClick} >
        <div className="ishop__img">
          <img src={this.props.dataSourse.photo} alt="good image" />
        </div>
        <div className="ishop__text-wrap">
          <a href={'/' + this.props.dataSourse.slug}>
            {this.props.dataSourse.name}
          </a>
          <div className="ishop__description">{this.props.dataSourse.description}</div>
        </div>
        <div className="ishop__price"> {this.props.dataSourse.totalPrice}
          <span className="ishop__instock"> в наличии: {this.props.dataSourse.inStock}</span> 
          <button className="ishop__btn" onClick={this.rowOnDelete}><img className="ishop__btn-img" src="../images/trash.svg" /></button>
          <button className="ishop__btn" > <img className="ishop__btn-img" src="../images/pencil.svg" /> </button>
        </div>
      </div>
    );

  }

}


export default GoodItem;