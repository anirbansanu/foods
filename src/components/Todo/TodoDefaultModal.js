import React, { Component } from 'react';
// import DateRangePicker from 'react-bootstrap-daterangepicker';
// import 'bootstrap-daterangepicker/daterangepicker.css';
// import moment from 'moment';
import {
    DateTimePicker,
    
  } from "react-tempusdominus-bootstrap";
  
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:

// you will also need the css that comes with bootstrap-daterangepicker
//  import {DateTimeField} from "react-bootstrap-datetimepicker";

export default class TodoDefaultModal extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    //   handleDateChange = (newDate) => {
    //     console.log("newDate", newDate);
    //     return this.setState({date: newDate});
    //   }
    render() {
        return (
            <div className="modal fade" id={`modal-default-${this.props.modalNum}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className={`modal-header bg-${this.props.color}`}>
                            <h4 className="modal-title">ToDo Details</h4>
                            
                            <span style={{cursor: "pointer",fontSize: "1.8rem",lineHeight: '1',float: "right"}} aria-hidden="true" data-dismiss="modal" aria-label="Close">×</span>
                            
                            </div>
                                <div className="modal-body">
                                    { /* Todo Modal Form */ }
                                    <form>
                                        <div className="card shadow-none">
                                            <div className="card-body">
                                                {/* Date and time Picker */}
                                                <div class="form-group">
                                                    <label>Date and Time:</label>
                                                        <div class="input-group date" id="reservationdatetime" data-target-input="nearest">
                                                            <DateTimePicker 
                                                                className="col-12 p-0" 
                                                                format="DD/MM/YYYY HH:mm A"
                                                                promptTimeOnDateChange
                                                                promptTimeOnDateChangeTransitionDelay={300}
                                                                widgetPositioning={{
                                                                    horizontal: "right",
                                                                    vertical: "bottom",
                                                                  }}
                                                                  buttons={{
                                                                    showToday: true,
                                                                    showClear: true,
                                                                    showClose: true,
                                                                  }}
                                                                  tooltips={{
                                                                    today: "Select today",
                                                                    clear: "Clear selected date",
                                                                    close: "Close picker",
                                                                    selectMonth: "Select month",
                                                                    prevMonth: "Previous month",
                                                                    nextMonth: "Next month",
                                                                    selectYear: "Select year",
                                                                    prevYear: "Previous year",
                                                                    nextYear: "Next year",
                                                                    selectDecade: "Select decade",
                                                                    prevDecade: "Previous decade",
                                                                    nextDecade: "Next decade",
                                                                    prevCentury: "Previous century",
                                                                    nextCentury: "Next century",
                                                                    incrementHour: "Increment hour",
                                                                    pickHour: "Pick hour",
                                                                    decrementHour: "Decrement hour",
                                                                    incrementMinute: "Increment minute",
                                                                    pickMinute: "Pick minute",
                                                                    decrementMinute: "Decrement minute",
                                                                    incrementSecond: "Increment second",
                                                                    pickSecond: "Pick second",
                                                                    decrementSecond: "Decrement second",
                                                                }}
                                                                iconClassName="fa-calendar"
                                                                icons={{
                                                                date: "fa fa-clock",
                                                                time: "fa fa-clock",
                                                                up: "fa fa-chevron-circle-up",
                                                                down: "fa fa-chevron-circle-down",
                                                                }}/>
                                                            {/* <DateRangePicker
                                                                initialSettings={{
                                                                    
                                                                    timePicker: true,
                                                                    singleDatePicker: true,
                                                                    showDropdowns: true,
                                                                    datePicker: false,
                                                                    startDate: moment().startOf('hour').toDate(),
                                                                    minYear: 2021,
                                                                    maxYear: parseInt(moment().format('YYYY'), 15),
                                                                    locale: {
                                                                        format: 'DD/MM/YYYY hh:mm A',
                                                                    },
                                                                    
                                                                }}
                                                                onCallback={(start) => {
                                                                    const days = moment().diff(start, 'days');
                                                                    const months = moment().diff(start, 'months');
                                                                    const years = moment().diff(start, 'years');
                                                                    alert('You are ' + days+ ' days'+ months+' months'+ years + ' years old!');
                                                                    // alert('You are ' + months + ' months old!');
                                                                    // alert('You are ' + years + ' days old!');
                                                                }}
                                                            >
                                                                <input type="text" className="form-control col-12" />
                                                            </DateRangePicker> */}

                                                            {/* <input type="text" class="form-control datetimepicker-input" data-target="#reservationdatetime"/>
                                                            <div class="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                                            </div> */}
                                                        </div>
                                                </div>
                                                {/* /.Date and time Picker */}
                                                <div className="form-group">
                                                    <label htmlFor="todoTitleText">Todo Title</label>
                                                    <input type="text" className="form-control" id="todoTitleText" placeholder="Todo Title Text" value={this.props.text || ""}/>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label htmlFor="todoTitleText">Todo Description</label>
                                                    <textarea class="form-control" id="todoTitleText" rows="3" placeholder="Enter Todo Description..." style={{marginTop: "0px", marginBottom: "0px", height: "115px"}}></textarea>
                                                </div>
                                                    
                                            </div>
                                        </div>

                                        { /* /.Todo Modal Form */ }

                                        <div class="card-footer ">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="submit" className={`btn btn-${this.props.color} float-right`}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            <div className="modal-footer justify-content-between">
                            {/* <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                        {/* /.modal-content */}
                    </div>
                    {/* /.modal-dialog */}

                </div>
                
        )
    }
}
