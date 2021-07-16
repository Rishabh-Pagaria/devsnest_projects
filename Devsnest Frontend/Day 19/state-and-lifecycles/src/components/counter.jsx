import {Component} from 'react';

export default class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      stateValue: 0
    };
  }
  setValue(){
    this.setState({stateValue : this.state.stateValue + 1})
  }
  render() {
    return(
      <div className = "counter">
        <button onClick = {()=> {
          this.setValue();
        }}>
        {this.state.stateValue}</button>
      </div>
    );
  }

}