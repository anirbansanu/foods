import React from 'react';
import Reg from '../components/Reg';


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
          email: '',
          password: '',
          status: false
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Register");
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };
    render(){
        return(
                <Reg/> 
            )
        }
}

export default SignUp;