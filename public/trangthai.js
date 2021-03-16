class MyComState extends React.Component {

    constructor(props) {
        super(props);
        // khai bao state cho component
        this.state = {
            total: 10,
            man: 6,
            woman: 4
        }
    }

    changeStateAddMan = () => {
        this.setState({ total: this.state.total + 1, man: this.state.man + 1 });
    }

    changeStateAddWoman = () => {
        this.setState({ total: this.state.total + 1, woman: this.state.woman + 1 });
    }


    // tao mot function trong compoment
    render() {
        return (
            <div>
                <h1> this is test Porps and State on Component </h1>
                <h2>this class is {this.props.lop} </h2>
                <div>
                    <label>count woman {this.state.woman}</label>
                </div>
                <div>
                    <label>count man {this.state.man}</label>
                </div>
                <div>
                    <label>tatol {this.state.total}</label>
                </div>
                <div>
                    <button type="button" onClick={this.changeStateAddMan}>Add Man</button>
                    <button type="button" onClick={this.changeStateAddWoman}>Add Woman</button>
                </div>
            </div>

        );
    }
};

//============================================================================================

class MyComRefs extends React.Component {
    constructor(props) {
        super(props);

    }

    getRefValue = () => {
        var text = this.refs.text.value;
        var sel = this.refs.sl.value;
        var val = sel + '-' + text;
        alert(val);
    }

    render() {
        return (
            <div>
                <h1>this is test Ref chuyen tham so</h1>
                <select ref='sl'>
                    <option value='A'>AAA</option>
                    <option value="B">BBB</option>
                    <option value="C">CCC</option>
                </select>
                <input type='text' ref="text" />
                <button onClick={this.getRefValue}>submit</button>
            </div>
        );
    }

}


//=== goi compoment ===
ReactDOM.render(
    <div>
        <h1 style={{ color: "red", fontSize:"4rem" }} >react js </h1>
        <MyComState lop="PHP " ></MyComState>

        <hr></hr>
        
        <MyComRefs />
    </div>,
    document.getElementById("root")
);


