var IShop = React.createClass({
  displayName: 'GoodsList',
  propTypes: {
     
    dataSourse: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        totalPrice: React.PropTypes.number, 
        slug: React.PropTypes.string,
        key: React.PropTypes.string,
        photo: React.PropTypes.string, //путь к изображению
        inStock: React.PropTypes.string, //доступно товара
        id: React.PropTypes.number, // id товара
      }),
    ).isRequired,
     
  },
  getInitialState: function () {
    return {
      goods: this.props.dataSourse.slice(0), // копия массива в goods
      selectId: null, //какой товар выбран
      goodsForRender: [],
    };
  },

  selectedGood: function(rowNum){
    console.log("Строчка " + rowNum);
    this.setState({selectId: rowNum});
    //this.setState({});
  },

  deletedGood: function(rowNum){
    console.log("удаляем " + rowNum);
    
    
  },

  render: function(){
    
    
    this.state.goods.forEach(element => {
      let good = React.createElement(GoodItem, { 
        key: element.id, 
        dataSourse: element,
        cbSelectedGood: this.selectedGood,
        cbDeletedGood: this.deletedGood,
        isSelected: this.state.selectId, // передаем признак, что товар выделен
      } );
      this.state.goodsForRender.push(good);
     
    });
    
    return React.DOM.div({className: "ishop__goods-list goods-list"}, this.state.goodsForRender);
   
  }
})