import React from 'react';
import "./GoodItem.css";

class GoodItem extends React.Component {

  static propTypes = {
    cbSelectedGood: React.PropTypes.func.isRequired,
    cbDeletedGood: React.PropTypes.func.isRequired,
    selectedGoodId: React.PropTypes.number,
    dataSourse: React.PropTypes.shape({
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      totalPrice: React.PropTypes.number,
      slug: React.PropTypes.string,
      key: React.PropTypes.string,
      photo: React.PropTypes.string, //путь к изображению
      inStock: React.PropTypes.string, //доступно товара
      id: React.PropTypes.number.isRequired,
    }),
  };
  constructor(props) {
    super(props);
  }

  state = {
    goodClases: { default: 'ishop__item', selected: 'ishop__item row-selected' }, // 
  };

  rowOnClick = () =>  {
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

    return React.DOM.div({ className: classItem, onClick: this.rowOnClick, },
      React.createElement('div', { className: "ishop__img" },
        React.createElement('img', { alt: 'good image', src: this.props.dataSourse.photo })
      ),
      React.createElement('div', { className: 'ishop__text-wrap', },
        React.createElement('a', { href: '/' + this.props.dataSourse.slug }, this.props.dataSourse.name),
        React.createElement('div', { className: 'ishop__description' }, this.props.dataSourse.description),
      ),
      React.createElement('div', { className: 'ishop__price' }, this.props.dataSourse.totalPrice,
        React.createElement('span', { className: 'ishop__instock', }, 'в наличии:' + this.props.dataSourse.inStock),
        React.DOM.button({ className: 'ishop__btndel', onClick: this.rowOnDelete, }, 'удалить'),
      ),


    );
  }

}


export default GoodItem;