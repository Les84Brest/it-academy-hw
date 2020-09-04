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
      }),
    ).isRequired,
     
  },
  getInitialState: function () {
    return {
      goods: this.props.dataSourse.slice(0), // копия массива в goods
      selectRow: null, //какой товар выбран
      goodsForRender: [],
    };
  },

  selectedGood: (rowNum) =>{
    console.log("Строчка " + rowNum);
    goodsForRender[rowNum]
  },

  render: function(){
    
    let count = 0;
    this.state.goods.forEach(element => {
      let good = React.createElement(GoodItem, { 
        key: count, 
        dataSourse: element,
        cbSelectedGood: this.selectedGood,
        rowNum: count,
      } );
      this.state.goodsForRender.push(good);
      count++;
    });
    console.log(this.state.goodsForRender);
    return React.DOM.div({className: "ishop__goods-list goods-list"}, this.state.goodsForRender);
   
  }
})