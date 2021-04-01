import React,{ Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props);
        const { initialVal } = this.props || '';
        this.state = {
            value: initialVal
        }
    }

    componentDidMount() {
        this.ObservableState('value',this.state.value);
    }


    handleChange = e => {
        const val = e.target.value;
        this.state.value = val;
        this.props.updateVal(val);
    }

    ObservableState = ( value, val) => {
        Object.defineProperty(this.state,value,{
            get() {
                console.log("get");
                return val;
            },
            set(v) {
                console.log('set');
                val = v;
            }
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <input onChange = {this.handleChange} value = {this.state.value}/>
            </div>
        )
    }
}