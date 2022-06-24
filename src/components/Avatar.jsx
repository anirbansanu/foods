import React, { Component } from 'react'
import defaultImg from '../img/user1-128x128.jpg';
import {Link} from 'react-router-dom';

export default class Avatar extends Component {
    render() {
        return (
            <div className="user-block ">
                <img className="img-circle img-bordered-sm" src={this.props.src?this.props.src:defaultImg} alt="user"/>
                <span className="username">
                    <Link to="/profile" className='text-info'>{this.props.seller}</Link>
                </span>
                <span className="description">Shared publicly - {this.props.subTitle}</span>
               
            </div>
        )
    }
}
