import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import userPic from '../../img/user1-128x128.jpg';
import Menu from './Menu';

export default class Header extends Component {
    render() {
        return (
          <>
          {!this.props.user?
          <div>
              <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <span className="nav-link" data-widget="pushmenu" ><i className="fas fa-bars" /></span>
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
                
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                  
                  {/* User Dropdown Menu */}
                  <li className="nav-item dropdown">
                    
                    <div className="user-panel d-flex" data-toggle="dropdown" >
                      <div className="image">
                        <img src={this.props.user?"http://localhost:8070/"+this.props.user.file:userPic} className="img-circle" alt="User Profile Pic" style={{height: '40px',width: '40px',borderRadius: '50%'}}/>
                      </div>
                      {/* <div className="info">
                        <Link className="d-block">Alexander Pierce</Link>
                      </div> */}
                    </div>
                  
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <span className="dropdown-item dropdown-header bg-gradient-primary bold">Profile</span>
                      <div className="dropdown-divider" />
                      <Link to="/profile" className="dropdown-item">
                        <i className="fas fa-user mr-2" /> View
                        
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="/log_out" className="dropdown-item">
                        <i className="fas fa-sign-out-alt mr-2"/>Log Out
                        <span className="float-right text-muted text-sm"></span>
                      </Link>
                      <div className="dropdown-divider" />
                      <Link to="/terms" className="dropdown-item dropdown-footer">Terms and conditions</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a href="#fullscreen" className="nav-link" data-widget="fullscreen" role="button">
                      <i className="fas fa-expand-arrows-alt"></i>
                    </a>
                  </li>
                  
                  {/* <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="/">
                      <i className="fas fa-th-large" />
                    </a>
                  </li> */}
                </ul>
              </nav>
          </div>:""}
          <Menu/>
          <Outlet/>

          </>
        )
    }
}
