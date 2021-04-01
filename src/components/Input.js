import React,{ useState, useEffect,useContext } from 'react'
import ShareContext from "../utils/createContext";
import ReactDOM from 'react-dom'

// export default class Input extends Component {
//     constructor(props) {
//         super(props);
//         const { initialVal } = this.props || '';
//         this.state = {
//             value: initialVal
//         }
//     }
//
//     componentDidMount() {
//         this.ObservableState('value',this.state.value);
//     }
//
//
//     handleChange = e => {
//         const val = e.target.value;
//         this.state.value = val;
//         this.props.updateVal(val);
//     }
//
//     ObservableState = ( value, val) => {
//         Object.defineProperty(this.state,value,{
//             get() {
//                 console.log("get");
//                 return val;
//             },
//             set(v) {
//                 console.log('set');
//                 val = v;
//             }
//         })
//     }
//
//     render() {
//         console.log('render');
//         return (
//             <div>
//                 <input onChange = {this.handleChange} value = {this.state.value}/>
//             </div>
//         )
//     }
// }

function Input(props) {
    const { initValue,updateVal } = props;
    const [ value, setValue ] = useState(initValue);

    const handleChange = e => {
        const val = e.target.value;
        setValue(val);
        updateVal(val);
    }

    useEffect(()=>{
        console.log('value has changed')
    },[value])

    return (
        <div>
            <input onChange = {handleChange} value = {value}/>
        </div>
    )
}

export default Input;