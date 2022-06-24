import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import Joi from "joi-browser";
import Card from './Card';
import { toast } from "react-toastify";
import user from '../services/userServices';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class AddProduct extends Component {
    state = {
        data: { 
            name:           this.props.info?this.props.info.name:'',
            brand_name:     this.props.info?this.props.info.brand_name:'',
            description:    this.props.info?this.props.info.description:'',
            images:         this.props.info?this.props.info.file:'',
            imagesPreview:   this.props.info?this.props.info.file:'',
            purchase_date:  this.props.info?this.props.info.purchase_date:'',
            price:          this.props.info?this.props.info.price:'',
            seller_id:      this.props.seller_id?this.props.seller_id:'',
            category_id:    this.props.info?this.props.info.category_id:'',
            category_name:  ''
        },
        
        errors: {}
    };
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
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors: errors || {} });
        if (errors) return;

        const d = await this.doSubmit();
        if(d){
            this.props.history.push('/myadds');
        }
        else{
            console.log(" historyProp not running");
            console.log(d);
        }
    };

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    };
    onFileChange = ({ target }) => {
        let images_as_base64 = [];
        let images = target.files;
        images_as_base64 = [
            images[0]?URL.createObjectURL(images[0]):'',
            images[1]?URL.createObjectURL(images[1]):'',
            images[2]?URL.createObjectURL(images[2]):'',
            images[3]?URL.createObjectURL(images[3]):'',
            images[4]?URL.createObjectURL(images[4]):''];

        const data = { ...this.state.data };
        data.images = images;
        data.imagesPreview=images_as_base64;
        this.setState({ 
            data
            
        });
        //  console.log(images);
        // console.log(this.state.errors);
    };
    onSelectChange=(value)=>{
        const errors = { ...this.state.errors };
        const input = {name: 'category_id',value : value.value};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data['category_id'] = value.value;
        data['category_name'] = value.label;

        this.setState({ data, errors });
        console.log(this.state.data);
        console.log(this.state.errors);
        console.log(this.validate());
    }
    handleDateChange=(input,dateString)=>{
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
    }
    doSubmit = async() => {
        const formData = new FormData();

        formData.append('name', this.state.data.name);
        formData.append('brand_name', this.state.data.brand_name);
        formData.append('description', this.state.data.description);

        Object.values(this.state.data.images).forEach(file=>{
            formData.append("images", file);
        });

        let formattedDate = `${this.state.data.purchase_date.getDate()}/${this.state.data.purchase_date.getMonth() + 1}/${this.state.data.purchase_date.getFullYear()}`;

        formData.append('purchasing_date',formattedDate);
        formData.append('price', this.state.data.price);
        if(this.props.seller_id)
            formData.append('seller_id', this.props.seller_id?this.props.seller_id:'');
        else
        {
            toast.error(`You are not a User`);
            return;
        }
        
        formData.append('category_id', this.state.data.category_id);
        console.log('formData : ');
        console.log(formData.get('images'));
        console.log(formData.get('seller_id'));
        try{
            const data = await user.addProduct(formData);
            // localStorage.setItem('tradly', jwt);
            // const data ="";
            console.log(data.data.affectedRows);
            if(data.data.affectedRows>0){
                toast.success(`Add Posted`);
                // this.props.history.push("/myadds");
                return 1;
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
            return 0;
        }
    
    };
    async componentDidMount(){
        let info;
        if(this.props.p_id){
            info = await this.props.getProductInfo(this.props.p_id);
            
            let files = info?[info.file,info.fileone,info.filetwo,info.filethree,info.filefour]:'';
            let date = moment(info.purchasing_date,"DD-MM-YYYY").toDate();
            let d = {};
            info?d={ 
                name:           info?info.name:'',
                brand_name:     info?info.brand_name:'',
                description:    info?info.description:'',
                images:         info?info.file:'',
                imagesPreview:  info?files:'',
                purchase_date:  info?date:'',
                price:          info?info.price.toString():'',
                seller_id:      this.props.seller_id?this.props.seller_id:'',
                category_id:    info?info.cat_id.toString():'',
                category_name:  info?info.cat_name:''
            }:console.log("info is empty");
            console.log(d); 
            info?this.setState({data:d}):console.log("info of AddProduct Not updated");
        }
        else{
            console.log("p_id is empty");
        }
        console.log(info);
    }
    render() {
        let host = "http://localhost:8070/";
        return (
            <section className="content mb-4">
                {/* {this.props.info?this.props.info.name:''}
                {this.props.update?"update is 1":"update is 0"} */}
                <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card title="Product" expand="1" collapse={1}>
                                <div className="form-group">
                                    <label htmlFor="category">Product Category</label>
                                    <Select value={{label:this.state.data.category_name || "", value:this.state.data.category_id || ""}} selected={this.state.data.category_name || ""} options={this.props.cats_list} onChange={this.onSelectChange} name="category_id" />
                                </div>
                                
                                <div className="form-group">
                                    <label>Purchase Date {this.props.seller_id?this.props.seller_id:''}</label>
                                    <DatePicker dateFormat="dd/MM/yy" selected={this.state.data.purchase_date || ""} onChange={(date)=>this.handleDateChange({name:'purchase_date',value:date})}/>
                                    {/* <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate"/>
                                        <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputName">Product Name</label>
                                    <input type="text" id="inputName" name="name" value={this.state.data.name} onChange={this.handleChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="brandName">Brand Name</label>
                                    <input type="text" id="brandName" name="brand_name" value={this.state.data.brand_name || ""} onChange={this.handleChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas ">₹</i></span>
                                        </div>
                                        <input type="text" id="price" name="price" value={this.state.data.price || ''} onChange={this.handleChange} className="form-control"/>
                                    </div>
                                </div>
                                
                            </Card>
                        {/* <!-- /.card --> */}
                        </div>
                        <div className="col-12 col-md-6">
                        <Card title="Product Details" expand="1" collapse={1}>
                            <div className="form-group">
                                <label htmlFor="inputDescription">Product Description</label>
                                <textarea id="inputDescription" name="description" value={this.state.data.description || ''} onChange={this.handleChange} className="form-control" rows="4"></textarea>
                            </div>
                            
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="custom-file">
                                        <input type="file" name='images' accept='image/*' multiple className="custom-file-input" id="profile-img" onChange={this.onFileChange} required/>
                                        <label className="custom-file-label" htmlFor="exampleInputFile">{this.state.data.imagesPreview?this.state.data.imagesPreview.length:'Choose file'}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='card d-inline-block' style={{height: '200px',width:' 100%'}}>
                                    {this.state.data.imagesPreview?this.state.data.imagesPreview.length>0?
                                    this.state.data.imagesPreview.map((image,i)=>
                                        image?<img key={i} className='img-fluid'  style={{height: '80px',width:'80px'}} src={`${this.props.p_id?host:""}${image}`} alt="product" />:''
                                    ):
                                    <div className='card mb-0 border-0 d-flex justify-content-center' style={{height: 'inherit',width:'100%'}}>
                                        <h3 className='text-center'>Uploaded Image Preview</h3>
                                        <h6 className='text-center'>Max upload limit is 5</h6>
                                    </div>:""}
                            </div>
                            {/* <!-- /.card-body --> */}
                        </Card>
                        {/* <!-- /.card --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-secondary">Cancel</button>
                            {this.props.p_id?<button type="submit" disabled={this.validate()} name="submit" className="btn bg-gradient-primary float-right bold">Update</button>
                            :<button type="submit" disabled={this.validate()} name="submit" className="btn bg-gradient-primary float-right">Post</button>}
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
export default withRouter(AddProduct);