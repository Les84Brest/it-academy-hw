var GoodItem = React.createClass({
  displayName: 'GoodItem',
  propTypes: {

    dataSourse: React.PropTypes.shape({
      name: React.PropTypes.string,
      description: React.PropTypes.string,
      totalPrice: React.PropTypes.number,
      slug: React.PropTypes.string,
      key: React.PropTypes.string,
      photo: React.PropTypes.string, //путь к изображению
      inStock: React.PropTypes.string, //доступно товара
    }),
    cbSelectedGood: React.PropTypes.function, //callback на выбор товара
    rowNum: React.PropTypes.number,

  },

  rowOnClick: function () {
    
    this.props.cbSelectedGood(this.props.rowNum);
  },
  render: function () {

    return React.DOM.div({ className: 'ishop__item',  },
      React.createElement('div', { className: "ishop__img" },
        React.createElement('img', { alt: 'good image', src: this.props.dataSourse.photo })
      ),
      React.createElement('div', { className: 'ishop__text-wrap', onClick: this.rowOnClick, },
        React.createElement('a', { href: '/' + this.props.dataSourse.slug }, this.props.dataSourse.name),
        React.createElement('div', { className: 'ishop__description' }, this.props.dataSourse.description),
      ),
      React.createElement('div', { className: 'ishop__price' }, this.props.dataSourse.totalPrice,
        React.createElement('span', { className: 'ishop__instock' }, 'в наличии:' + this.props.dataSourse.inStock),
        React.DOM.button({ className: 'ishop__btndel', }, 'удалить'),
      ),


    );
  }
});