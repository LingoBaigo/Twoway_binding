import React,{ Component } from 'react'
import InputCteator from "./utils/inputCteator";
import Input from "./components/Input";
import Show from "./components/Show";
import Select from "./components/Select";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
        initialVal: "react",
        value:'',
        initialSelet:'apple',
        seletVal:''
    };
  }


  updateVal = (val) => {
      this.setState({value: val});
  }

  updateSelect = (val) => {
      this.setState({seletVal: val});
  }


  render() {
      const { initialVal,value,initialSelet } = this.state;
      return (
        <div className="App">
          <div>
              <Input initialVal = {initialVal} updateVal = {this.updateVal}/>
              <p> 父组件App: { this.state.value } </p>
              <Show value = {value} />
              <hr/>
              <Select initialSelet = {initialSelet} updateSelect = {this.updateSelect } />
          </div>
        </div>
      );
  }
}
