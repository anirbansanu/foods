import React, { Component } from 'react';
import HashLoader from "react-spinners/HashLoader";

export default class Loader extends Component {
  render() {
    return (
        <div className='d-flex justify-content-center w-inherit h-inherit p-5' style={{width: '100%',height: '500px'}}>
            <div className="align-middle pt-5 mt-5">
                <HashLoader color={"#222"} loading={!this.props.loaded} size={100} />
            </div>
        </div>
    );
  }
}
