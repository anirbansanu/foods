import React, { Component } from 'react';
import {VectorMap} from 'react-jvectormap';
import { Sparklines,SparklinesLine } from 'react-sparklines';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';

import "./Map.css";

export default class Map extends Component {
  constructor(props) {
        super(props);
        this.state = {
          start: moment().subtract(29, 'days'),
          end: moment(),
        }
        this.handleDateRangePickerCallback = this.handleDateRangePickerCallback.bind(this);
    }
    handleDateRangePickerCallback = (start, end) => {
      this.setState({ start, end });
      alert(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }

    render() {
      const { start, end } = this.state;
        return (
            <div className="card bg-gradient-primary">
            <div className="card-header border-0">
              <h3 className="card-title">
                <i className="fas fa-map-marker-alt mr-1" />
                Visitors
              </h3>
              {/* card tools */}
              <div className="card-tools">
                <DateRangePicker
                  initialSettings={{
                    startDate: start.toDate(),
                    endDate: end.toDate(),
                    ranges: {
                      Today: [moment().toDate(), moment().toDate()],
                      Yesterday: [
                        moment().subtract(1, 'days').toDate(),
                        moment().subtract(1, 'days').toDate(),
                      ],
                      'Last 7 Days': [
                        moment().subtract(6, 'days').toDate(),
                        moment().toDate(),
                      ],
                      'Last 30 Days': [
                        moment().subtract(29, 'days').toDate(),
                        moment().toDate(),
                      ],
                      'This Month': [
                        moment().startOf('month').toDate(),
                        moment().endOf('month').toDate(),
                      ],
                      'Last Month': [
                        moment().subtract(1, 'month').startOf('month').toDate(),
                        moment().subtract(1, 'month').endOf('month').toDate(),
                      ],
                    },
                  }}
                  onCallback={this.handleDateRangePickerCallback}
                >
                  <button type="button" className="btn btn-primary btn-sm" title="Date range">
                    <span className="pr-1">{this.state.start.format('MM/DD/YY') + ' - ' + this.state.end.format('MM/DD/YY')}</span> <i className="far fa-calendar-alt" />
                  </button>
                </DateRangePicker>
                <button type="button" className="btn btn-primary btn-sm" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
              </div>
              {/* /.card-tools */}
            </div>
            <div className="card-body">
              <div  style={{height: 250, width: '100%'}} >
                  <VectorMap 
                          id="world-map" 
                          map={'world_mill'}
                          backgroundColor="transparent"
                          ref="map"
                          containerStyle={{
                              width: '100%',
                              height: '100%'
                          }}
                          regionStyle= {{
                                initial: {
                                  fill: 'rgba(255, 255, 255, 0.7)',
                                  'fill-opacity': 1,
                                  stroke: 'rgba(0,0,0,.2)',
                                  'stroke-width': 1,
                                  'stroke-opacity': 1
                                }
                              }
                          }
                            
                          containerClassName="map"
                  />
              </div>
            </div>
            {/* /.card-body*/}
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-4 text-center">

                  {/* <Sparklines data={} width={30} height={20}>
                      <SparklinesLine style={{ strokeWidth: 0.25, stroke: "#92c1dc", fill: "#ffffff" }} />
                      
                  </Sparklines> */}
                  <Sparklines id="sparkline-1" data={[1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]} style={{fill:'#fff'}}>
                      <SparklinesLine color="#ffffff" fill= "#ffffff"/>
                  </Sparklines>
            
                  
                  <div className="text-white">Visitors</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-2" >
                    <Sparklines data={[515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]} >
                        <SparklinesLine color="#ffffff" fill= "#ffffff"/>
                    </Sparklines>
                  </div>
                  <div className="text-white">Online</div>
                </div>
                {/* ./col */}
                <div className="col-4 text-center">
                  <div id="sparkline-3" >
                    <Sparklines data={[15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]} >
                        <SparklinesLine color="#ffffff" fill= "#ffffff"/>
                    </Sparklines>
                  </div>
                  <div className="text-white">Sales</div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
            </div>
          </div>
        )
    }
}
