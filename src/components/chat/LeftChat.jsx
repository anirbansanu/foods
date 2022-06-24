import React, { Component } from 'react';
import userPic2 from '../../img/user2-160x160.jpg';
import PropTypes from 'prop-types';

export default class LeftChat extends Component {
  static propTypes = {
    user: PropTypes.string,
    timeStamp: PropTypes.string,
    chat: PropTypes.string,
  };
  render() {
    return (
        <div className="direct-chat-msg">
            <div className="direct-chat-infos clearfix">
                <span className="direct-chat-name float-left">{this.props.user?this.props.user:"User Name"}</span>
                <span className="direct-chat-timestamp float-right">{this.props.timeStamp?this.props.timeStamp:"Time Stamp"}</span>
            </div>
            {/* <!-- /.direct-chat-infos --> */}
            <img className="direct-chat-img" src={userPic2} alt="Message User "/>
            {/* <!-- /.direct-chat-img --> */}
            <div className="direct-chat-text">
                {this.props.chat?this.props.chat:""}
            </div>
            {/* <!-- /.direct-chat-text --> */}
        </div>
    );
  }
}
