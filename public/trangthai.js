// ===== component test Props va State =============================================================
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


    //========= tao mot function trong compoment =============================
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

//======== component test Ref, State, Onclick, function ====================================================================================

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

class ChangeImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: 1,
        }
    }

    changePic = () => {
        this.setState({ pic: (this.state.pic % 3) + 1 });
    }

    render() {
        return (
            <div>
                <h1> Images</h1>
                <img style={{width:"400px"}} src={"./images/" + this.state.pic + ".jpg"} />
            </div>

        );
    }

    componentDidMount() {
        setInterval(this.changePic, 1000);
    }
}

//=== ****** phan chinh goi cac component de show o trang home ******========================================
ReactDOM.render(
    <div>
        <h1 style={{ color: "red", fontSize: "4rem" }} >react js </h1>
        <MyComState lop="PHP " ></MyComState>
        <hr></hr>
        <MyComRefs />
        <hr></hr>
        <ChangeImage />
    </div>,
    document.getElementById("root")
);





