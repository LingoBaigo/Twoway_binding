import React,{ useState,useEffect,createContext } from 'react'
// import InputCteator from "./utils/inputCteator";
import Input from "./components/Input";
import Show from "./components/Show";
import Select from "./components/Select";
import ShareContext from "./utils/createContext";
import './App.css';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//         initialVal: "react",
//         value:'',
//         initialSelet:'apple',
//         seletVal:''
//     };
//   }
//
//
//   updateVal = (val) => {
//       this.setState({value: val});
//   }
//
//   updateSelect = (val) => {
//       this.setState({seletVal: val});
//   }
//
//
//   render() {
//       const { initialVal,value,initialSelet } = this.state;
//       return (
//         <div className="App">
//           <div>
//               <Input initialVal = {initialVal} updateVal = {this.updateVal}/>
//               <p> 父组件App: { this.state.value } </p>
//               <Show value = {value} />
//               <hr/>
//               <Select initialSelet = {initialSelet} updateSelect = {this.updateSelect } />
//           </div>
//         </div>
//       );
//   }
// }

function App() {
    const [ initValue, setInitValue ] = useState('react');
    const [ value, setValue ] = useState('');
    const [ initSelect,setInitSelect ] = useState('apple');

    const updateVal = (val) => {
        setValue(val);
    }

    const updateSelect = (val) => {
        setInitSelect(val);
    }

    return (
        <div className="App">
                <Input initValue = {initValue} updateVal = {updateVal} />
                <p> 父组件App: { value } </p>
                <Show value = {value} />
                <Select initSelect = {initSelect} updateSelect = {updateSelect}/>
        </div>
    )
}

export default App;