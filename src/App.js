import React, { Component } from 'react';
import ColorPicker from 'rc-color-picker';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      selectors:[],
      openColor: false
    }
    this.addSelectors = this.addSelectors.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.changePopupColor = this.changePopupColor.bind(this);
    this.removeSelector = this.removeSelector.bind(this);
  }

  addSelectors() {
    this.setState({selectors: [...this.state.selectors, {number: this.state.selectors++, color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)}]});
  }

  changeColor() {
    this.setState({openColor: !this.state.OpenColor});
  }

  changePopupColor(i) {
    var array = this.state.selectors;
    var index = array.indexOf(i);
    // change color to the new color with . notation
  }

  removeSelector(i){
    var array = this.state.selectors;
    var index = array.indexOf(i);
    if (index > -1) {
      array.splice(index, 1);
    }
    this.setState({selectors: array});
  }

  render() {
    return (
      <div className="App">
        <p>Your CSS Selectors!</p>
        {this.state.selectors.map(i => {
          return (
            <div className="selector-container">
              <input type='color' value={i.color} onClick={() => this.changeColor} />
              {
                this.state.openColor ? 
                    <ColorPicker
                      defaultColor={i.color}
                      onChange={() => this.changePopupColor(i)}
                      // alpha={30}
                      placement="bottomLeft"
                    />
                  : null}
              <input type="text" placeholder='put css selector here'/>
              <span 
                onClick={() => this.removeSelector(i)} 
                className="remove">
                  &times;
              </span>
            </div>
          )
        })}
        <div>
          <span 
            onClick={() => this.addSelectors()}
            className="add-selector"  
          >
            + Add Selector
          </span>
        </div>
      </div>
    );
  }
}

export default App;
