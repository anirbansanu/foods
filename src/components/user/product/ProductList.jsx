import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class ProductList extends Component {
    
    render() {
        return (
            <div className='row m-0'>
            {
                this.props.loaded?this.props.list.map((item, i) => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-2' key={i}>
                        <Link className="text-decoration-none" to={`/product/${item.id}`}>
                            <div className="card product-item shadow" >
                                <div className='card-img-top'>
                                    <img src={item.file?"http://localhost:8070/"+item.file:"logo"} alt="product-img" style={{width: '100%',height: "180px"}}/>
                                </div>
                                <div className="card-body border-side-primary p-2">
                                    <h5 className="card-title m-1 text-dark font-weight-bold">{"₹"+item.price}</h5>
                                    <p className="card-text m-1 text-secondary">{item.name}</p>
                                    
                                </div>
                                <div className="card-body border-side-primary p-2 d-flex">
                                    <span className='m-1 text-secondary text-truncate'>{item.city+","+item.district+","+item.state}</span>
                                    <span className='ml-auto m-1 text-secondary '>{item.date}</span>
                                </div>
                            </div>  
                        </Link>            
                    </div>
                )):"Nothing To Show"
                
            }
                
            </div>
        )
    }
}
