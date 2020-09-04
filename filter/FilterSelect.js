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
      filterTextValue: '', // текущее значение текста
      filterSortValue: false, // текущее значение чекбокса

    };
  },

  filterFindTextChanged: function (e) {
    this.state.filterTextValue = e.target.value;
    let findedArr = this.props.filterData.filter(item => {
      let regexp = RegExp(e.target.value);

      return item.match(regexp);

    });
    
    this.setState({ stringArray: findedArr });
  },

  filterSortClicked: function (e) {

      
    this.state.filterSortValue = e.target.checked; // сохраянем состояние чекбокс в State
    if (e.target.checked) {
     
      this.state.oldStateArray = this.state.stringArray.slice(0); // Клон массива для отката
      this.state.stringArray.sort();
      
      this.setState({ stringArray: this.state.stringArray });
    } else {
       this.setState({ stringArray: this.state.oldStateArray });
    }
    
  },

  resetBtnClicked: function (e) {
    this.setState({ stringArray: this.props.filterData,});
      //  filterTextValue: '', filterSortValue: false }); //восстанавливаем данные для select

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
      React.DOM.input({ type: "checkbox", name: "filterSort", className: "filter__sort", onClick: this.filterSortClicked, defaultChecked: false, }),
      React.DOM.input({ type: "text", name: "filterFind", className: "filter__find", placeholder: "поиск...", onChange: this.filterFindTextChanged, }),
      React.DOM.input({ type: "button", className: "filter__resetbtn", value: "Сброс", onClick: this.resetBtnClicked, }),
      React.DOM.select({ type: "button", className: "filter__strings", size: 7 },
        stringOptions
      ),
    )
  },
})


