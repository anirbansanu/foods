import React, { Component } from 'react';
import { Line,Doughnut } from 'react-chartjs-2';
const salesChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      
      {
        label: 'Electronics',
        fill: true,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: true,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 75, 81, 56, 55, 40]
      },
      {
        label: 'Digital Goods',
        fill: true,
        backgroundColor: 'rgba(60,141,188,0.8)',
        borderColor: 'rgba(60,141,188,0.9)',
        pointRadius: true,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [28, 38, 40, 19, 86, 27, 90]
      }
    ]
  };
  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

  const salesChartOptions = {
    elements: {
        line: {
            tension: 0.30 // disables bezier curves
        }
	},
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: true
          
        }
      }],
      yAxes: [{
        gridLines: {
          display: true
          
        }
      }]
    }
  };
  const DoughnutData = {
    labels: [
      'Instore Sales',
      'Download Sales',
      'Mail-Order Sales'
    ],
    datasets: [
      {
        data: [30, 12, 20],
        backgroundColor: ['#f56954', '#00a65a', '#f39c12']
      }
    ]
  };
  const DoughnutOptions = {
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true
  };
export default class Chartswithtabs extends Component {
    render() {
        return (
            
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Sales
                    </h3>
                    <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                            <li className="nav-item">
                            <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                            </li>
                        </ul>
                    </div>
                </div>{/* /.card-header */}
                <div className="card-body">
                    <div className="tab-content p-0">
                    {/* Morris chart - Sales */}
                        <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
                            <Line data={salesChartData} options={salesChartOptions} legend={legend} height={300} style={{height: 300}} />                         
                        </div>
                        <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
                            <Doughnut data={DoughnutData} options={DoughnutOptions}/>                      
                        </div>  
                    </div>
                </div>{/* /.card-body */}
            </div>
            
        )
    }
}
