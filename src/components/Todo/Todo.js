import React, { Component } from 'react';
import TodoItems from './TodoItems';
// import { ReactSortable } from "react-sortablejs";

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [
            {
              item_id : "1",
              text : "Design a nice theme",
              badge : "4 mins",
              bdgColor : "danger"
            },
            {
              item_id : "2",
              text:"Make the theme responsive",
              badge:"4 hours",
              bdgColor : "info"
            },
            {
              item_id : "3",
              text:"Let theme shine like a star",
              badge:"1 day",
              bdgColor : "warning"
            },
            {
              item_id : "4",
              text:"Check your messages and notifications",
              badge:"1 week",
              bdgColor : "primary"
            },
            {
              item_id : "5",
              text:"Let theme shine like a star",
              badge:"2 month",
              bdgColor : "secondary"
            },
            {
              item_id : "6",
              text:"Let's Go To the Market",
              badge:"2 month",
              bdgColor : "success"
            }
          ],
          todoTitle: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.todoTitleHandler = this.todoTitleHandler.bind(this);
    }
    handleClick(event){
      event.preventDefault();
      // console.log("clicked on add item");
      // console.log(event);
      // console.log("submited value : "+this.state.todoTitle);
      // console.log("this.state.data : "+(Number(this.state.data[this.state.data.length-1].modalNum)+1));
      this.setState(
        {
          data: [...this.state.data,{
            item_id : (Number(this.state.data[this.state.data.length-1].modalNum)+1).toString(),
            text:this.state.todoTitle,
            badge:"no time",
            bdgColor : "success"
          }]
        }
      )
      this.setState({todoTitle: ""});
    }
    todoTitleHandler(event){
      this.setState({todoTitle: event.target.value});
    }
    render() {
        return (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="ion ion-clipboard mr-1" />
                  {this.props.title?this.props.title:"Title"}
                </h3>
                <div className="card-tools">
                  <ul className="pagination pagination-sm">
                    <li className="page-item"><a href="/" className="page-link">«</a></li>
                    <li className="page-item"><a href="/" className="page-link">1</a></li>
                    <li className="page-item"><a href="/" className="page-link">2</a></li>
                    <li className="page-item"><a href="/" className="page-link">3</a></li>
                    <li className="page-item"><a href="/" className="page-link">»</a></li>
                  </ul>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <ul class="todo-list" data-widget="todo-list">
                    {
                    this.state.data.map((element) => {
                      return <TodoItems 
                                key = {element.item_id}
                                text = {element.text}
                                badge = {element.badge}
                                bdgColor = {element.bdgColor}
                              />
                    })}
                    
                  </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
              <form action="#" method="post" onSubmit={this.handleClick}>
                <div className="input-group">
                  <input type="text" value={this.state.todoTitle} name="message" placeholder="What to do..." className="form-control" onChange={this.todoTitleHandler}/>
                  <span className="input-group-append">
                    <button type="submit" className="btn btn-primary" >
                      <i className="fas fa-plus mr-1"></i> 
                      ADD Item
                    </button>
                  </span>
                </div>
              </form>
              </div>
              
            </div>
        )
    }
}
