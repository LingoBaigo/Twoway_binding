import React,{ Component } from 'react'

export default class Show extends Component {
    constructor(props) {
        super(props);
        const { value } = this.props || ""
        this.state = {
            value: value
        }
    }
    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.value !== this.props.value) {
    //         this.setState({ value : nextProps.value });
    //     }
    // }

    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.value !== prevState.value){
            //通过对比nextProps和prevState，返回一个用于更新状态的对象
            return {
                value: nextProps.value
            }
        }
        //不需要更新状态，返回null
        return null
    }

    render() {
        return (
            <div>
                <p> 另一个子组件Show: { this.state.value } </p>
            </div>
        )
    }
}