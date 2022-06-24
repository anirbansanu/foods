import React, { Component } from 'react';
// fontawesome-svg-core

export default class InfoBox extends Component {
    render() {
        return (
            <div className={`info-box shadow border-side-${this.props.leftBorderColor?this.props.leftBorderColor:"transparent"}`}>
              <span className={`info-box-icon bg-${this.props.iconBoxColor?this.props.iconBoxColor:"primary"}`}>
                <i className={`${this.props.icon?this.props.icon:""}`}></i>
                {/* <FontAwesomeIcon icon="fa-solid fa-people-carry-box" /> */}
              </span>

              <div className="info-box-content">
                <span className="info-box-text h5">
                  <b>{this.props.title?this.props.title:"Title"}</b>
                </span>
                <span className="info-box-number">{this.props.text?this.props.text:"0"}</span>
              </div>
            </div>
        )
    }
}
