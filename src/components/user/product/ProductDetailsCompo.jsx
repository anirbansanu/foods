import React, { Component } from 'react';
import Card from '../../Card';
// import prod1 from '../../../img/prod-1.jpg';
// import prod2 from '../../../img/prod-2.jpg';
// import prod3 from '../../../img/prod-3.jpg';
// import prod4 from '../../../img/prod-4.jpg';
import Avatar from '../../Avatar';
import InfoBox from '../../InfoBox';
import Callout from '../../Callout';
import jwtDecode from "jwt-decode";
import { Link } from 'react-router-dom';

export default class ProductDetailsCompo extends Component {
    state={
        host: 'http://localhost:8070/',
        file: this.props.info.file?this.props.info.file:'',
        files: [this.props.info.file?this.props.info.file:'',
                this.props.info.fileone?this.props.info.fileone:'',
                this.props.info.filetwo?this.props.info.filetwo:'',
                this.props.info.filethree?this.props.info.filethree:'',
                this.props.info.filefour?this.props.info.filefour:''
                ],
        user: ""
    }
    imgHandler = (index) =>{
        this.setState({file:this.state.files[index]});
    }
    deleteHandler=async(id)=>{
        if(id)
        {
            let data = await this.props.onDelete(id);
            console.log("data in ProductDetailsCompo class");
            console.log(id);
        }
        else{
            alert("ID Not Passed");
        }
   
    }
    componentDidMount(){
        try{
          const jwt=localStorage.getItem('tradly');
          const user=jwtDecode(jwt);
          this.setState({user});
        }catch(e){}   
    }
    render() {
        // const {name,description,brand_name,price,purchasing_date,date,views,f_name} = this.props.info;
        return (
            <div className='mt-4'>
            
                <section className="content ">
                        <Card title="Product" expand="1">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h3 className="d-inline-block d-sm-none">{this.props.info.name}</h3>
                                    <div className="col-12">
                                    <img src={this.state.file?this.state.host+this.state.file:""} className="product-image" alt="Product" style={{maxHeight: '450px'}}/>
                                    </div>
                                    <div className="col-12 product-image-thumbs">
                                    {this.props.info.file?<div className="product-image-thumb active" onClick={()=>this.imgHandler(0)}><img src={this.state.host+this.props.info.file} alt="Product"/></div>:""}
                                        {this.props.info.fileone?<div className="product-image-thumb" onClick={()=>this.imgHandler(1)}><img src={this.state.host+this.props.info.fileone} alt="Product "/></div>:""}
                                        {this.props.info.filetwo?<div className="product-image-thumb" onClick={()=>this.imgHandler(2)}><img src={this.state.host+this.props.info.filetwo} alt="Product "/></div>:""}
                                        {this.props.info.filethree?<div className="product-image-thumb" onClick={()=>this.imgHandler(3)}><img src={this.state.host+this.props.info.filethree} alt="Product "/></div>:""}
                                        {this.props.info.filefour?<div className="product-image-thumb" onClick={()=>this.imgHandler(4)}><img src={this.state.host+this.props.info.filefour} alt="Product "/></div>:""}
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    
                                    <Callout color="primary">
                                        <h2 className="my-3"><b>₹</b> {this.props.info.price}</h2>
                                        <hr />
                                        <h5 className='text-truncate'>{this.props.info.name}</h5>
                                        <div className='row m-0'>
                                            <div className="col-12 pl-0">
                                                <div className='mb-3 mt-3 text-truncate'>
                                                    <i className='fas fa-map-marker-alt mr-2 f-large text-primary'></i>
                                                    <span className='text-truncate'>{this.props.info.city+","+this.props.info.district+","+this.props.info.state}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 pl-0">
                                                <div className='mb-3 text-truncate'>
                                                    <i className='fas fa-phone-alt mr-2 f-large text-primary'></i>
                                                    <span className='text-truncate'><b>Call On -  </b>{this.props.info.phone}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 pl-0">
                                                <div className='mb-3 text-truncate'>
                                                    <i className='fas fa-calendar-alt mr-2 f-large text-primary'></i>
                                                    <span className='text-truncate'><b>Purchasing Date -  </b>{this.props.info.purchasing_date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </Callout> 
                                    <div className="row m-0 pl-0">
                                        <div className="col-12 col-sm-6 pl-0">
                                            <InfoBox title="Views" text={this.props.info.views} icon="far fa-eye" iconBoxColor="info" leftBorderColor="info"/>
                                        </div>
                                        <div className="col-12 col-sm-6 pl-0">
                                            <InfoBox title="Offers" text={this.props.info.views} icon="fas fa-comments-dollar" iconBoxColor="danger" leftBorderColor="danger"/>
                                        </div>
                                    </div>                         
                                    <Callout color="primary">
                                        <h4 className="my-3"><b>Seller</b></h4>
                                        <hr/>
                                        <Avatar seller={this.props.info.f_name} subTitle={this.props.info.date}/>
                                        {this.state.user?this.state.user.id.u_id===this.props.info.u_id?
                                        
                                        <div>
                                            <div className='d-inline-block mt-3 w-100'>
                                                <Link to={`/edit/${this.props.info.id}` } className="btn btn-outline-primary btn-lg btn-flat float-left">
                                                <i className="fas fa-edit fa-lg mr-2"></i>
                                                    <b>Edit</b>
                                                </Link>
                                                <div className="btn btn-outline-danger btn-lg btn-flat float-right" onClick={()=>this.deleteHandler(this.props.info.id)}>
                                                <i className="fas fa-trash fa-lg mr-2"></i>
                                                    <b>Delete</b>
                                                </div>
                                            </div>
                                        </div>:
                                        <div className="btn btn-outline-primary btn-lg btn-flat mt-5 w-100">
                                            <i className="fas fa-cart-plus fa-lg mr-2"></i>
                                                <b>Chat With Seller</b>
                                        </div>:""}
                                        
                                    </Callout>    

                                </div>
                            </div>
                        </Card>
                        <Card title="Details" expand="1" >
                            <div className="row mt-4">
                                <nav className="w-100">
                                    <div className="nav nav-tabs" id="product-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Description</a>
                                    <a className="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
                                    <a className="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a>
                                    </div>
                                </nav>
                                <div className="tab-content p-3" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> 
                                        {this.props.info.description}
                                    </div>
                                    <div className="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Comming Soon </div>
                                    <div className="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Comming Soon </div>
                                </div>
                            </div>
                        </Card>
                </section>
            </div>
        )
    }
}
