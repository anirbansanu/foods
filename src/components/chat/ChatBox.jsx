import React, { Component } from 'react';
import DirectChatContacts from './DirectChatContacts';
import DirectChatMessages from './DirectChatMessages';
import SendBox from './SendBox';
import PropTypes from 'prop-types';

export default class ChatBox extends Component {
  static propTypes = {
    title: PropTypes.string,
    collapse: PropTypes.bool,
    maximize: PropTypes.bool,
    contacts: PropTypes.bool,
    remove: PropTypes.bool,
  };
  render() {
    return (
    <div className="card card-primary card-outline direct-chat direct-chat-primary h-80">
        <div className="card-header">
        <h3 className="card-title text-truncate">{this.props.title?this.props.title:"Title"}</h3>

        <div className="card-tools">
            {/* <span title="3 New Messages" className="badge bg-primary">3</span> */}
            {this.props.collapse?<button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus"></i>
            </button>:""}
            
            {this.props.contacts?
              <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
              <i className="fas fa-comments"></i>
              </button>:""}
            {this.props.maximize?
            <button type="button" class="btn btn-tool" data-card-widget="maximize" data-animation-speed="500">
              <i class="fas fa-expand"></i>
            </button>:""}
            {this.props.remove?
              <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times"></i>
              </button>:""}
        </div>
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body overflow-hidden" style={{display: 'block'}}>
        {/* <!-- Conversations are loaded here --> */}
        <DirectChatMessages/>
        {/* <!--/.direct-chat-messages--> */}

        {/* <!-- Contacts are loaded here --> */}
        {this.props.contacts?<DirectChatContacts/>:""}
        {/* <!-- /.direct-chat-pane --> */}
        </div>
        {/* <!-- /.card-body --> */}
        <div className="card-footer" style={{display: 'block'}}>
            <SendBox/>
        </div>
    {/* <!-- /.card-footer--> */}
    </div>
    );
  }
}
