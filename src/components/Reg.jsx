import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import user from '../services/userServices';
import avatar from '../avatar2.jpg';

import { Link } from "react-router-dom";

export default class Reg extends Form {
    state = {
        data: { 
            f_name: '',
            l_name: '',
            email: '',
            phone:'',
            password: '',
            image: '',
            imagePreview: '',
            district: '',
            state:'',
            city:'',
            country:'',
        },
        tab: 1,
        errors: {}
    };
    nxtTab = (nxttab) => {
        this.setState({tab: nxttab})
    }
    schema = {
        f_name: Joi.string()
          .required()
          .label("First_Name"),
        l_name: Joi.string()
        .required()
        .label("Last_Name"),
        email: Joi.string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .label("Email"),
        phone: Joi.string()
          .required()
          .label("Phone"),
        password: Joi.string()
          .required()
          .label("Password"),
        city: Joi.string()
          .required()
          .label("City"),
        district: Joi.string()
          .required()
          .label("District"),
        state: Joi.string()
          .required()
          .label("State"),
        country: Joi.string()
          .required()
          .label("Country"),
        image: Joi.any()
        .label("Profile Image"),
        imagePreview: Joi.any()
        .label("Profile Image")
        
    };
    onFileChange = ({ target }) => {
        let image_as_base64 = URL.createObjectURL(target.files[0])
        let image = target.files[0];
        const data = { ...this.state.data };
        data.image = image;
        data.imagePreview=image_as_base64;
        this.setState({ 
            data
            
        });
        // console.log(this.validate());
        // console.log(this.state.errors);
    };
    doSubmit = async() => {
        const formData = new FormData();

        formData.append('f_name', this.state.data.f_name);
        formData.append('l_name', this.state.data.l_name);
        formData.append('email', this.state.data.email);
        formData.append('phone', this.state.data.phone);
        formData.append('pass', this.state.data.password);
        formData.append('district', this.state.data.district);
        formData.append('state', this.state.data.state);
        formData.append('city', this.state.data.city);
        formData.append('country', this.state.data.country);
        formData.append('image', this.state.data.image);


        console.log(formData);
        try{
            const data = await user.reg(formData);
            // localStorage.setItem('tradly', jwt);
            console.log(data);
            if(data){
                toast.success(`Registered`);
                this.props.history.push('/login');
            }
            else{
                toast.error(`Registration Failed`);

            }
            // this.props.history.push('/');
        //   window.location='/';
        }catch(e){
            console.log(e.response.data);
            if(e.response.data && e.response.status===404){
                toast.error(e.response.data);
            }
        }
    
    };
    render() {
        return (
            <div className="d-flex justify-content-center align-center">
                <div className="login-box pt-5">
                    {/* <!-- /.login-logo --> */}
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <Link to="/home" className="h1"><b>Tradly</b>App</Link>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Register a new membership</p>

                            <form onSubmit={this.handleSubmit}>
                            <div className={`tab ${this.state.tab===1?"":'d-none'}`}>
                                {this.renderInputAppendGroup("f_name","First Name","text","","fas fa-user")}
                                {this.renderInputAppendGroup("l_name","Last Name","text","","fas fa-user")}
                                {this.renderInputAppendGroup("email", "Email",'email','','fas fa-envelope')}
                                {this.renderInputAppendGroup("phone", "Phone",'text','','fas fa-envelope')}
                                {this.renderInputAppendGroup("password", "Password", "password",'','fas fa-lock')}
                                <div className='d-flex justify-content-end'>
                                    <button type="button" onClick={()=>this.nxtTab(2)} className="btn btn-primary btn-sm bold" >Next</button>
                                </div>
                            </div>
                            <div className={`tab ${this.state.tab===2?"":'d-none'}`}>
                                {this.renderInputAppendGroup("city","City","text","","fas fa-city")}
                                {this.renderInputAppendGroup("district", "District",'text','','fas fa-map-marked-alt')}
                                {this.renderInputAppendGroup("state", "State", "text",'','fas fa-map-marked-alt')}
                                {this.renderInputAppendGroup("country", "Country", "text",'','fas fa-flag')}

                                <div className='d-flex justify-content-between'>
                                    <button type="button" onClick={()=>this.nxtTab(1)} className="btn btn-sm btn-outline-primary bold ">Previous</button>
                                    <button type="button" onClick={()=>this.nxtTab(3)} className="btn btn-primary btn-sm bold" >Next</button>
                                </div>
                            </div>
                            <div className={`tab ${this.state.tab===3?"":'d-none'}`}>
                                    <div className='card mb-3' style={{minHeight: '200px'}}>
                                    <label htmlFor="exampleInputFile">File input</label>
                                        <img className='img-fluid' src={this.state.imagePreview?this.state.imagePreview:avatar} alt="profile" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input type="file" name='image' className="custom-file-input" id="profile-img" onChange={this.onFileChange} required/>
                                                <label className="custom-file-label" htmlFor="exampleInputFile">{this.state.data.imagePreview?this.state.data.image.name:'Choose file'}</label>
                                            </div>
                                        </div>
                                    </div>
                                
                                <div className='d-flex justify-content-between'>
                                    <button type="button" onClick={()=>this.nxtTab(2)} className="btn btn-sm btn-outline-primary bold ">Previous</button>
                                    {this.renderButton("Sign Up")}
                                </div>
                            </div>
                                
                            </form>

                            <p className="mb-1">
                            {/* <a href="forgot-password.html">I forgot my password</a> */}
                            </p>
                            <div className="d-flex justify-content-center">
                             <Link to="/login" className="p-2">I already have a membership</Link>
                            </div>
                        </div>
                    {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>
            </div>
            
        );
    }
}
