

function outClass(){
  alert('global event');
}

function outClass(param){
  alert(param);
}

//=== tao mot compoment ===
class MyCom extends React.Component {
  // tao mot function trong compoment
  showMegaess(param) {
    alert(param);
  }

  render() {
    return (
      <div>
        <h1>this is my compoment </h1>
        <h2>{this.props.title} <i>thoi gian khoa hoc</i> {this.props.time}</h2>
        <h3>{this.props.children}</h3>
        <MySubCom />
        
        <button onClick={() => this.showMegaess(this.props.title)}>Thong Bao</button>
        <button onClick={outClass}>event ngoai class khong param</button>
        <button onClick={()=>{var ten =this.props.title +'-' + this.props.time; outClass(ten) }}>event ngoai class co param</button>
      </div>

    );
  }
};

// tao compoment con
class MySubCom extends React.Component {
  render() {
    return (
      <label> this is sub compoment </label>
    );
  }
}


//=== goi compoment ===
ReactDOM.render(
  <div>
    <h2 style={{color:"red" }}>fsdfasdfsdfasdfsd</h2>
    <MyCom title="khoa hoc php" time='2 thang' />
    <hr />
    <MyCom title="khoa hoc reactjs" time='6 thang'> children proprety </MyCom>
  </div>,
  document.getElementById("root")
);


