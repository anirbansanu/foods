import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className={`card card-light ${this.props.className?this.props.className:""}`}>
                <div className="card-header">
                    <h3 className="card-title">{this.props.title?this.props.title:"Title"}</h3>

                    <div className="card-tools">
                    {
                        this.props.refresh?
                        <button type="button" className="btn btn-tool" data-card-widget="card-refresh" data-source="widgets.html" data-source-selector="#card-refresh-content" data-load-on-init="false">
                            <i className="fas fa-sync-alt"></i>
                        </button>
                        :""
                    }
                    {
                        this.props.collapse?
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" data-animation-speed="500">
                            <i className="fas fa-minus"></i>
                        </button>:""
                    }
                    {
                        this.props.expand?
                        <button type="button" className="btn btn-tool" data-card-widget="maximize" data-animation-speed="500">
                            <i className="fas fa-expand"></i>
                        </button>:""
                    }
                    
                    {
                        this.props.remove?
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>:""
                    }
                    </div>
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
