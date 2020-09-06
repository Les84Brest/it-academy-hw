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
    console.log('Все поменяли');
    let changedArr;
    
    if(this.state.filterSortValue == true){// сортируем
      if(this.state.filterTextValue == ''){
        
        console.log('пустое значение фильтра');
        changedArr = this.props.filterData.slice().sort(); //если значение фильтра не задано берем из props сортируем 
        console.log(changedArr);
        
        return this.setState({stringData: changedArr});
        
      }else{
        let rexp = RegExp(this.state.filterTextValue);
        
        changedArr = this.props.filterData.filter(item => {
          
          return item.match(rexp);
        }).sort();
        console.log(changedArr);
        this.setState({stringData: changedArr});
      }      
    }else{//сортировать не нужно
      if(this.state.filterTextValue == ''){//фильтр пустой
        console.log('пустое значение фильтра');
        changedArr = this.props.filterData.slice(); //если значение фильтра не задано берем из props
        console.log(changedArr);
        this.setState({stringData: changedArr});
        
      }else{//есть значение фильтра
        changedArr = this.props.filterData.slice(0).filter(item => {
          let rexp = RegExp(this.state.filterTextValue);
          return item.match(rexp);
        });
        console.log(changedArr);
        this.setState({stringData: changedArr});
      }  
    }
  },


  resetBtnClicked: function (e) {
    console.log('сброс');
    this.setState({ stringArray: this.props.filterData,
      filterTextValue: '', 
      filterSortValue: false }, (){
        console.log('chf,jasfd');
      });
   
   
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
      React.DOM.input({ type: "checkbox", name: "filterSort", className: "filter__sort", onClick: this.filterSortChanged, value: this.state.filterSortValue, defaultChecked: false, }),
      React.DOM.input({ type: "text", name: "filterFind", className: "filter__find", placeholder: "поиск...", onChange: this.filterFindTextChanged, value: this.state.filterTextValue, defaultValue: '', }),
      React.DOM.input({ type: "button", className: "filter__resetbtn", value: "Сброс", onClick: this.resetBtnClicked, }),
      React.DOM.select({ type: "button", className: "filter__strings", size: 7 },
        stringOptions
      ),
    )
  },
})


