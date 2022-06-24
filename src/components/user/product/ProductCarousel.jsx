import React, { Component } from 'react';
import logo from '../../../product.jpg';
import b from '../../../BANNER.png';

export default class ProductCarousel extends Component {
    constructor(props){
        super(props);
        this.state={
            info: {}
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
            <div className='h-100 w-100'>
                <div id="carouselExampleIndicators" className="carousel mx-auto justify-content-center align-items-center shadow h-100 w-100 slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol> */}
                    <div className="carousel-inner h-100 w-100">
                        <div className="carousel-item active  w-100 h-100">
                        <img src={logo} className="d-block w-100 h-100" alt="..."/>
                        </div>
                        <div className="carousel-item w-100 h-100">
                        <img src={b} className="d-block w-100 h-100" alt="..."/>
                        </div>
                        <div className="carousel-item w-100 h-100">
                        <img src={logo} className="d-block  w-100 h-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                    <ol className="carousel-img-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
                            <img src={logo} className="d-block" alt="..."/></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <img src={b} className="d-block" alt="..."/>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <img src={logo} className="d-block" alt="..."/>
                        </li>
                    </ol>
                </div>
                
            </div>
        )
    }
}
