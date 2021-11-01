//========= tao component tu dong voi vong lap map========================================

// ========== component la 1 item show du lieu bang Children ==================================== 
class ComMap extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}
//======***** phan show ra file home ejs *******=======================================
ReactDOM.render(
    <div>
        <h1 className={'title'}>render compoment by loop Map</h1>
        <ComMapList />
    </div>,
    document.getElementById("root")
);