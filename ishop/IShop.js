var IShop = React.createClass({
  displayName: 'GoodsList',

  render: function(){
    let goods = [];

    this.props.dataSourse.forEach(element => {
     let goodItem = 
      React.DOM.div({key: Math.floor( Math.random() * 100000), className: 'ishop__item'},
        React.createElement('div', {className: "ishop__img"}, 
          React.createElement('img', {alt: 'good image', src: element.photo})
        ),
        React.createElement('div', {className: 'ishop__text-wrap'}, 
          React.createElement('a', {href: '/' + element.slug}, element.name),
          React.createElement('div', {className: 'ishop__description'}, element.description),
        ),
        React.createElement('div', {className: 'ishop__price'}, element.totalPrice, 
         React.createElement('span', {className: 'ishop__instock'}, 'в наличии:' + element.inStock),
        ),
      
      );
     
     console.log(goodItem);
     
     
      goods.push(goodItem);
    });

    return React.createElement('div', {className: 'ishop__goods-list goods-list'}, 
    goods
    );
   
  }
})