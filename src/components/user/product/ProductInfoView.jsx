import React, { Component } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import SellerDesc from './SellerDesc';

export default class ProductInfoView extends Component {
    constructor(props){
        super(props);
        this.state={
            info: this.props.info
        }
    }
    componentDidUpdate(prevProps, nextProps) {
        if(prevProps !== this.props){
         console.log(nextProps);
         this.setState({
            info: nextProps.info,
         });
       }
    }
    
    render() {
        return (
            <div className='container-fluid p-0 border-danger'>
                <div className="card shadow border-side-primary">
                    <div className="card-body">
                        <div className='card-body px-0 py-4 d-flex justify-content-between'>
                            <h5 className="card-title product-price">₹{this.state.info.price}</h5>
                            <div className='card-tool float-right'>
                                <span className='btn text-primary'><ShareIcon/></span>
                            </div>
                        </div>
                        <p className="card-text product-title h5">{this.state.info.name}</p>
                        <div className='card-body d-flex justify-content-between p-0'>
                            <p className="card-text text-secondary m-0 p-1 h6">{this.state.info.address}</p>
                            <p className='card-text text-secondary p-1'>{this.state.info.date}</p>
                        </div>
                    </div>
                </div>
                <SellerDesc info={this.state.info}/>
            </div>
        )
    }
}
