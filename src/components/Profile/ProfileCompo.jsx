import React from 'react';
import { Link } from 'react-router-dom';
import Form from "../common/form";
import './ProfileCompo.css';

export default class ProfileCompo extends Form {
    constructor(props){
        super(props);
        this.state={
            
        };
        console.log("user from ProfileCompo");
        console.log(this.props.user);
    }
    
    
  render() {
    return (
        <div className="container-fluid">
            <div className="card mb-3 w-100">
                <div className="row no-gutters">
                    <div className="col-12 col-sm-3 col-lg-2 d-flex justify-content-center">
                        <img className='img-fluid' src={this.props.user?'http://localhost:8070/'+this.props.user.file:"https://t4.ftcdn.net/jpg/04/43/35/27/360_F_443352708_Pcf1kZAK856AGaXe1Nz4H0IjrrbezhUq.jpg"} alt="user profile img"/>
                    </div>
                    <div className="col-12 col-sm-9 col-lg-10 text-truncate">
                        <div className="card-body p-3 d-flex ">
                            <div className='text-truncate'>
                                <h4 className="card-title bold">{this.props.user.f_name?this.props.user.f_name:"First Name"} {this.props.user.l_name?this.props.user.l_name:"Second Name"}</h4>
                                <p className="card-text text-secondary bold m-0">Phone - {this.props.user.phone?this.props.user.phone:"0000000000"}</p>
                                <p className="card-text text-secondary bold">Email - {this.props.user.email?this.props.user.email:"example@gmail.com"}</p>
                            </div>
                            <div className='ml-auto'>
                                <Link to="profile/edit/:id" className="btn btn-outline-primary " >Edit Profile</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profile-head">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="about-tab" data-toggle="tab" href="#about" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">Address</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                
                    <div className="row">
                        <div className="col-md-8">
                            <div className="tab-content profile-tab pl-3" id="myTabContent">
                                <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.u_id?this.props.user.u_id:"userID"}</p>
                                            
                                
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.f_name?this.props.user.f_name:"First Name"} {this.props.user.l_name?this.props.user.l_name:"Second Name"}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.email?this.props.user.email:"Email"}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.phone?this.props.user.phone:"phone"}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="tab-pane fade pl-3" id="address" role="tabpanel" aria-labelledby="address-tab">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>City</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.city?this.props.user.city:"City"}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>District</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.district?this.props.user.district:"district"}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>State</label>
                                        </div>
                                        <div className="col-sm-6">
                                            <p>{this.props.user.state?this.props.user.state:"State"}</p>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

