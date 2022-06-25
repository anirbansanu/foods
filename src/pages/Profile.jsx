import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Profile extends Component {
  render() {
    return (
        <>
        <div className='content-wrapper h-100'>
          <div className="row m-0 mb-5 d-flex justify-content-center">
            <div className='col-10 mt-5 col-sm-8 col-md-4'>
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile"/>
                </div>

                <h3 className="profile-username text-center">Anirban</h3>

                <p className="text-muted text-center">sdlksdbf</p>

                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Post</b> <a className="float-right">1,322</a>
                  </li>
                  <li className="list-group-item">
                    <b>Following</b> <a className="float-right">543</a>
                  </li>
                  <li className="list-group-item">
                    <b>Friends</b> <a className="float-right">13,287</a>
                  </li>
                </ul>

                <Link to="/update" className="btn btn-primary btn-block"><b>Update</b></Link>
              </div>
              
            </div>
            </div>
            </div>
            {/* end of row */}
          </div>
        </>
    );
  }
}
