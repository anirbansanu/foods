import React from 'react';
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "../../components/common/form";
import user from '../../services/userServices';

export default class Edit extends Form {
    state = {
        data: { 
        },
        
        errors: {}
    };
    schema = {
        name: Joi.string()
          .required()
          .label("name"),
        brand_name: Joi.string()
        .required()
        .label("brand_name"),
        description: Joi.string()
          .required()
          .label("description"),
        price: Joi.string()
          .required()
          .label("price"),
        purchase_date: Joi.any()
          .required()
          .label("purchase_date"),
        seller_id: Joi.any()
          .required()
          .label("seller_id"),
        category_id: Joi.string()
          .required()
          .label("category_id"),
          category_name: Joi.string()
          .required()
          .label("category_name"),
        images: Joi.any()
        .label("Profile Image"),
        imagesPreview: Joi.any()
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
        <div className='card'>
            {this.renderInputAppendGroup("f_name","First Name","text","","fas fa-user")}
            {this.renderInputAppendGroup("l_name","Last Name","text","","fas fa-user")}
            {this.renderInputAppendGroup("email", "Email",'email','','fas fa-envelope')}
            {this.renderInputAppendGroup("phone", "Phone",'text','','fas fa-envelope')}
            {this.renderInputAppendGroup("password", "Password", "password",'','fas fa-lock')}
            <div className='d-flex justify-content-end'>
                <button type="button" onClick={()=>this.nxtTab(2)} className="btn btn-primary btn-sm bold" >Next</button>
            </div>
        </div>
    )
  }
}
