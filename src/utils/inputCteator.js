const InputCteator = function(options) {
    const { stateKey = 'inputVal', label = "" } = options;
    const { inputVal } = this.state || "";
    const self = this;
    // 监听get，set方法，set时自动更新state
    Object.defineProperty(this.state, "inputVal", {
        get() {
            console.log('get');
            return inputVal;
        },
        set(val) {
            console.log('set');
            self.setState({[stateKey]: val});
        }
    });

    const handleChange = e => {
        const val = e.target.value;
        self.setState({ [stateKey]: val })
    };

    const content = (
        <input type = "text" value = {inputVal} onChange = {handleChange} name = {label} id = {label} />
    )
    return content;
}
export default InputCteator;
