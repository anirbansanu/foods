import React, { Component } from 'react'

export default class SideCard extends Component {
    render() {
        return (
            <div className={`card card-light ${this.props.className?this.props.className:""}`}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
