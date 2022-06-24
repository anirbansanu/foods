import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import auth from '../services/authService';
import { Link } from "react-router-dom";

export default class SignIn extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    };
    
    schema = {
        email: Joi.string()
            .required()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .label("Email"),
        password: Joi.string()
          .required()
          .label("Password")
    };
    
    doSubmit = async() => {
        try{
            const {data:jwt}= await auth(this.state.data);
            localStorage.setItem('tradly', jwt);
            console.log(jwt);
            if(jwt){
                toast.success(`WelCome`);
                window.location='/home';
            }
            else{
                toast.error("email or password not matched");
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
                            <p className="login-box-msg">Sign in to start your session</p>

                            <form onSubmit={this.handleSubmit}>
                                {this.renderInputAppendGroup("email", "Email",'email','text','fas fa-envelope')}
                                {this.renderInputAppendGroup("password", "Password", "password",'','fas fa-lock')}
                                <div className="d-flex justify-content-end">
                                    {this.renderButton("Login")}
                                </div>
                            </form>

                            <p className="mb-1">
                            {/* <a href="forgot-password.html">I forgot my password</a> */}
                            </p>
                            <p className="mb-0">
                                <Link to="/reg" className="text-center">Register a new membership</Link>
                            </p>
                        </div>
                    {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>
            </div>
            
        );
    }
}
