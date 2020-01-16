import React, { Component } from 'react'
import Keypad from './components/Keypad';
import ResultDisplay from './components/ResultDisplay';
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      output: '',
      keypadArray: [
        [{ 'type': 'number', 'value': 7 }, { 'type': 'number', 'value': 8 }, { 'type': 'number', 'value': 9 }, { 'type': 'action', 'value': 'CE' }],
        [{ 'type': 'number', 'value': 4 }, { 'type': 'number', 'value': 5 }, { 'type': 'number', 'value': 6 }, { 'type': 'action', 'value': '/' }],
        [{ 'type': 'number', 'value': 1 }, { 'type': 'number', 'value': 2 }, { 'type': 'number', 'value': 3 }, { 'type': 'action', 'value': '*' }],
        [{ 'type': 'number', 'value': 0 }, { 'type': 'number', 'value': "." }, { 'type': 'action', 'value': "=" }, { 'type': 'action', 'value': '+' }]
      ],
      tempInput: '',
      tempOutput: ''
    }
  }

  keypadCallback(type, value) {
    if (String(this.state.input).charAt(0) == 0) {
      this.setState({ input: '' }, () => {
        this.calculate(type, value)
      })
    } else {
      this.calculate(type, value)
    }
  }

  calculate(type, value) {

    this.state.tempInput = this.state.input + String(value);

    if (type == 'number') {
      this.state.tempOutput = eval(this.state.tempInput);
      this.setState({
        input: this.state.tempInput,
        output: String(this.state.tempOutput).indexOf('.') >= 0 ? (this.state.tempOutput.toFixed(2)) : this.state.tempOutput
      });

    } else if (type == 'action' && value == 'CE') {
      this.setState({
        input: '0',
        output: '',
        tempInput: '',
        tempOutput: ''
      });
    } else if (type == 'action' && value == '=') {
      this.setState({
        input: !!this.state.tempOutput ? this.state.tempOutput : 0,
        output: ''
      });
    }
    else {
      this.setState({
        input: this.state.tempInput
      });
    }
  }



  render() {
    var styles1 = {
      border: "2px solid black",
      margin: "10px",
      padding: "10px",
      display: "inline-block"
    };



    return (
      <div>
        <div className="container">
          <div className="calci" style={styles1}>
            <h4>Calculator</h4>
            <ResultDisplay displayInput={this.state.input} displayOutput={this.state.output}></ResultDisplay>
            <Keypad keypadarray={this.state.keypadArray} calciClick={this.keypadCallback.bind(this)}></Keypad>
          </div>
        </div>
      </div>
    )
  }
}
