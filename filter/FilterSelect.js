//FilterSelect фильтр строк селекта

var FilterSelect = React.createClass({
  displayName: "FilterSelect",
  propTypes: {
    filterData: React.PropTypes.array.isRequired,
  },
  getInitialState: function () {
    return {
      stringArray: this.props.filterData,
      filterTextValue: '', // текущее значение текста
      filterSortValue: false, // текущее значение чекбокса

    };
  },

  filterFindTextChanged: function (e) {
    this.setState({ filterTextValue: e.target.value }, this.changeStringList);

  },

  filterSortChanged: function (e) {
    this.setState({ filterSortValue: e.target.checked }, this.changeStringList);

  },

  changeStringList: function () {
    let arrDataCopy = this.props.filterData.slice(); // копия строк
    
    if(this.state.filterTextValue != ''){
      arrDataCopy = arrDataCopy.filter(item => { //фильтруем, если надо
        return item.includes(this.state.filterTextValue);
      });
    }

    if(this.state.filterSortValue){ // сортируем, если надо
      arrDataCopy.sort();
    }

    this.setState({ stringArray: arrDataCopy });

  },


  resetBtnClicked: function (e) {
    this.setState({
      stringArray: this.props.filterData,
      filterTextValue: '',
      filterSortValue: false
    }, );
   
   
  },
  render: function () {
    let stringOptions = [];

    let count = 0;
    this.state.stringArray.forEach(element => {
      let item = React.DOM.option({ key: count, value: element }, element);
      stringOptions.push(item);
      count++;
    });
    console.log("отработал рендер");
    console.log(this.state.stringArray);
    return React.DOM.div({ className: "filter__wrap" },
      React.DOM.input({ type: "checkbox", name: "filterSort", className: "filter__sort", onClick: this.filterSortChanged, checked: this.state.filterSortValue,  }),
      React.DOM.input({ type: "text", name: "filterFind", className: "filter__find", placeholder: "поиск...", onChange: this.filterFindTextChanged, value: this.state.filterTextValue,  }),
      React.DOM.input({ type: "button", className: "filter__resetbtn", value: "Сброс", onClick: this.resetBtnClicked, }),
      React.DOM.select({ type: "button", className: "filter__strings", size: 7 },
        stringOptions
      ),
    )
  },
})


