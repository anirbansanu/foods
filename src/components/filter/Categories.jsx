import React, { Component } from 'react';
import Select from 'react-select';
const options = [
    { value: 'Car', label: 'Car' },
    { value: 'Bike', label: 'Bike' },
    { value: 'Mobile', label: 'Mobile' }
  ]

export default class Categories extends Component {
    render() {
        return (
            <div className='container-fluid p-2 shadow-sm'>
                <div className="row m-0">
                    <div className="col-11 col-md-3">
                        <Select options={options} />
                    </div>
                    <div className="col-0 col-md-8 d-md">
                        <ul className="navbar-nav ml-md-auto d-inline-block ">
                            <li className="nav-item d-inline-block">
                                <div className="cat-item" activeclassname="text-white">
                                    <b>Car</b>
                                </div>
                            </li>  
                            <li className="nav-item d-inline-block">
                                <div className='cat-item'><b>Bikes</b></div>
                            </li> 
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
