import React from 'react';
import { Link } from 'react-router-dom';
import user from '../services/userServices';
import { toast } from "react-toastify";

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      status: false
    }
  }
  loginAuth= async (prevProps, nextProps)=>{
    try{
        const res = await user.login({email: this.state.data.email,password: this.state.data.password});
        const actualData = await res.data;
        //console.log(actualData);
        // if(prevProps !== this.props){
        //     this.setState({
        //         data:actualData,
        //         loaded: true
        //     });
        // }
        console.log(actualData);

    }
    catch(err){
        console.log(err);
    }
    
  }
  handleSubmit = async (e)=>{
    e.preventDefault();
    console.log("SignIn");
    const data = await this.loginAuth();
    this.setState({status: true})
    console.log(data);
  }
  handleEmailChange =(e) =>{
    // console.log(e.target.value)
    this.setState({email : e.target.value});
  }
  handlePasswordChange =(e) =>{
    // console.log(e.target.value)
    this.setState({password : e.target.value});
  }
  handleCheck =() =>{
    console.log("Remember_me");
  }
    render() {
      return (
        <>        
          <div className="row m-0 mt-5 d-flex justify-content-center">
            <div className="col-10 col-sm-6 col-md-4">
              {/* <!-- /.login-logo --> */}
              <div className="card card-outline card-primary">
                <div className="card-header text-center">
                  <Link to="/home" className="h1"><b>Tradly</b>App</Link>
                </div>
                <div className="card-body">
                  <p className="login-box-msg">Sign in to start your session</p>

                  <form action="../../index3.html" method="post">
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}/>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3 d-flex justify-content-between">
                        <div className="icheck-primary">
                          <input type="checkbox" id="remember" onClick={this.handleCheck}/>
                          <label htmlFor="remember">
                            Remember Me
                          </label>
                        </div>
                      {/* <!-- /.col --> */}
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign In</button>
                    </div>
                  </form>

                  <p className="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
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
        {this.state.status?toast.success("login successful"):""}
        </>
      )
    }
}
export default SignIn;