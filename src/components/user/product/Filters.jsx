import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Car', label: 'Car' },
  { value: 'Bike', label: 'Bike' },
  { value: 'Mobile', label: 'Mobile' }
]


export default class Filters extends Component {
    

    render() {
        return (
            <div className='container-fluid b-edge-shadow p-0' >
                <div className='row mx-md-5 my-md-2'>
                    <div className='col-12 col-md-12 px-md-5 p-2'>
                        <div className="form-group m-0">
                            <div className="input-group input-group-lg">
                                <input type="search" className="form-control form-control-lg" placeholder="Type your keywords here" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-lg btn-default">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 px-md-5 pb-2'>
                        <Select options={options} />
                    </div>
                    <div className='col-12 col-md-6 px-md-5 pb-2'>
                        <Select options={options} />
                    </div>
                    
                
                </div>
            </div>
        )
    }
}
