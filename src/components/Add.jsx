import React, { Component } from 'react';
import Callout from './Callout';
import { Link } from 'react-router-dom';

export default class Add extends Component {
    onDelete=async (id)=>{
        await this.props.onDelete(id);
        console.log("data in Add class");
        console.log(id);

    }
    render() {
        return (
            <Callout color="primary" className="p-0">
                <div className='row m-0'>
                    <div className='col-12 col-sm-2 bg-light-gray d-flex flex-row justify-content-center align-items-center ' >
                        
                        <font className='p-2 p-sm-0 text-secondary bold'>{this.props.date?this.props.date:"date"}</font>
                        
                    </div>
                    
                    <div className='col-12 col-sm-5 p-2'>
                        <div className='d-flex'>
                            <img src={"http://localhost:8070/"+this.props.file} className='img-box' alt='prod img'></img>
                            <p className='m-0 ml-2 bold'>{this.props.price?"₹ "+this.props.price:"price"}</p>
                            
                        </div>
                        
                        
                        <p className='text-truncate'>{this.props.title?this.props.title:"title"}</p>
                    </div>
                    <div className='col-12 col-sm-5 p-2'>
                        <div className='adds-actions ml-auto text-right'>
                            <Link className="btn btn-primary btn-sm m-1" to={`/product/${this.props.id}`}>
                                <i className="fas fa-folder mr-md-1">
                                </i>
                                <font className='text-md'>View</font>
                            </Link>
                            <Link className="btn btn-info btn-sm m-1" to={`/edit/${this.props.id}`}>
                                <i className="fas fa-pencil-alt mr-md-1">
                                </i>
                                <font className='text-md'>Edit</font>
                            </Link>
                            <button className="btn btn-danger btn-sm m-1" onClick={()=>this.onDelete(this.props.id)}>
                                <i className="fas fa-trash mr-md-1">
                                </i>
                                <font className='text-md'>Delete</font>
                            </button>
                        </div>
                    </div>
                </div>
            </Callout>
        );
    }
}
