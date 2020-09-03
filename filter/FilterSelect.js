//FilterSelect фильтр строк селекта

var FilterSelect = React.createClass({
  displayName: "FilterSelect",
  propTypes: {
    filterData: React.PropTypes.array.isRequired,
  },
  getInitialState: function () {
    return {
      stringArray: this.props.filterData,
      oldStateArray: [], // в переменной будет храниться массив для отката
    };
  },
  filterFindTextChanged: function (e) {
    let findedArr = this.props.filterData.filter(item => {
      let regexp = RegExp(e.target.value);
      
      return item.match(regexp);

    });
    
    this.setState({stringArray: findedArr});
  },

  filterSortClicked: function(e){
    console.log(this.stringArray);
    this.oldStateArray = this.stringArray.slise(); // копия массива для отката
   if(e.target.checked){
    
    this.stringArray.sort()
    this.setState({stringArray: this.stringArray});
   }else{
    this.setState({stringArray: this.oldStateArray});
   }
    // 
  },
  resetBtnClicked: function(e){
    this.setState({stringArray: this.props.filterData}); //восстанавливаем данные для select
    
  },
  render: function () {
    let stringOptions = [];

    let count = 0;
    this.state.stringArray.forEach(element => {
      let item = React.DOM.option({ key: count, value: element }, element);
      stringOptions.push(item);
      count++;
    });
    return React.DOM.div({ className: "filter__wrap" },
      React.DOM.input({ type: "checkbox", name: "filterSort", className: "filter__sort", onClick: this.filterSortClicked, defaultChecked: false,}),
      React.DOM.input({ type: "text", name: "filterFind", className: "filter__find", placeholder: "поиск...", onChange: this.filterFindTextChanged, }),
      React.DOM.input({ type: "button", className: "filter__resetbtn", value: "Сброс", onClick: this.resetBtnClicked, }),
      React.DOM.select({ type: "button", className: "filter__strings", size: 7 },
        stringOptions
      ),
    )
  },
})


