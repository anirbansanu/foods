import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FilterBtn extends Component {
  render() {
    return (
        <Link className={`btn bg-secondary ${this.props.className}`} data-widget="control-sidebar" data-slide="true" role="button">
            {this.props.icon?this.props.icon:<i className="fas fa-filter"></i> }
        </Link>
    );
  }
}
