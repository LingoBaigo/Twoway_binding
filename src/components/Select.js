import React,{ useState,useEffect,useContext } from 'react'
import ShareContext from "../utils/createContext";

// export default class Select extends Component {
//     constructor(props) {
//         super(props);
//         const { initialSelet } = this.props || 'apple'
//         this.state = {
//             selectValue: initialSelet
//         }
//     }
//
//     componentDidMount() {
//         this.ObservableState('selectValue',this.state.selectValue);
//     }
//
//     handleChange = (e) => {
//         const val = e.target.value;
//         this.state.selectValue = val;
//         this.props.updateSelect(val);
//     }
//
//
//     ObservableState = ( value, val) => {
//         Object.defineProperty(this.state,value,{
//             get() {
//                 console.log('get');
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
//         console.log(this.props)
//         return (
//             <div>
//                 <form>
//                     <select name="fruits" onChange = {this.handleChange}>
//                         <option value="apple">苹果</option>
//                         <option value="orange">橘子</option>
//                         <option value="banana">香蕉</option>
//                         <option value="lemon">柠檬</option>
//                     </select>
//                 </form>
//                 <p> {this.state.selectValue} </p>
//             </div>
//         )
//     }
// }

function Select(props) {
    const { initSelect, updateSelect } = props
    const [ selectVal, setSelectVal ] = useState(initSelect);

    const handleChange = (e) => {
        const val = e.target.value;
        setSelectVal(val);
        updateSelect(val);
    }

    useEffect(()=>{
        console.log('selectVal has changed')
    },[selectVal])

    return (
        <div>
            <form>
                <select name="fruits" onChange = {handleChange}>
                    <option value="apple">苹果</option>
                    <option value="orange">橘子</option>
                    <option value="banana">香蕉</option>
                    <option value="lemon">柠檬</option>
                </select>
            </form>
            <p> {selectVal} </p>
        </div>
    )
}

export default Select;