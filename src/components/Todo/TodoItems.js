import React, { Component } from 'react';
// import TodoDefaultModal from "./TodoDefaultModal";


export default class TodoItems extends Component {
    
    render() {
        return (
            <>
                
                <li>
                    <div className="row">
                        <div className="col-1 p-0">
                            {/* drag handle */}
                            <span className="handle">
                                <i className="fas fa-ellipsis-v" />
                                <i className="fas fa-ellipsis-v" />
                            </span>
                            {/* diable checkbox */}
                            {/* <div className="icheck-primary d-inline ml-2">
                                <input type="checkbox" defaultValue name={`todo${this.props.modalNum.toString()}`} id={`todoCheck${this.props.modalNum.toString()}`}/>
                                <label htmlFor={`todoCheck${this.props.modalNum.toString()}`} />
                            </div>  */}
                        </div> 
                        <div className="col-10 p-0" style={{cursor: "pointer"}} data-toggle="modal" data-target={`#modal-default-${this.props.modalNum}`}>  
                            {/* todo text */}
                            <span className="text" ref="text">{this.props.text}</span>
                        
                        
                            {/* Emphasis label */}
                            <small className={`badge badge-${this.props.bdgColor || 'danger'}`}><i className="far fa-clock" /> {this.props.badge}</small>
                        </div>
                            {/* General tools such as edit or delete*/}
                        <div className="col-1 p-0" >
                            <div className="tools p-0">
                                {/* <font style={{fontSize: "1.01rem", cursor: "pointer"}} data-toggle="modal" data-target={`#modal-default-${this.props.modalNum}`}><i class="fas fa-info-circle" /></font> */}
                                <i className="fas fa-trash" />
                            </div>
                        </div>
                    </div>
                </li>
                {/* <TodoDefaultModal text={this.props.text} modalNum={this.props.item_id} color={this.props.bdgColor}/> */}
          </>
        )
    }
}
