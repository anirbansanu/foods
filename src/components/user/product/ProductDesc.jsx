import React, { Component } from 'react'

export default class ProductDesc extends Component {
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
            <div className="card shadow mt-4 mb-4 border-side-danger">
                    <div className="card-body">
                        <div className='card-body d-flex justify-content-between p-0'>
                            <h5 className="card-title product-price">Description</h5>
                        </div>
                        <p className="card-text product-desc h6">{this.state.info.description}</p>
                        <p className="card-text product-desc h6">natural lead-in to additional content.</p>
                        
                    </div>
                </div>
        )
    }
}
