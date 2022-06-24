import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            value: '',

        }
    }
  render() {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text"><i className="fas ">₹</i></span>
            </div>
            <input type="text" id="price" className="form-control"/>
        </div>
    );
  }
}
