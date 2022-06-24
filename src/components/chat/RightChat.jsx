import React, { Component } from 'react';
import userPic3 from '../../img/user3-128x128.jpg';
import PropTypes from 'prop-types';


export default class RightChat extends Component {
  static propTypes = {
    user: PropTypes.string,
    timeStamp: PropTypes.string,
    chat: PropTypes.string,
  };
  render() {
    return (
      <div className="direct-chat-msg right">
          <div className="direct-chat-infos clearfix">
              <span className="direct-chat-name float-right">{this.props.user?this.props.user:"User Name"}</span>
              <span className="direct-chat-timestamp float-left">
                {this.props.timeStamp?this.props.timeStamp:"time stamp"}
              </span>
          </div>
          {/* <!-- /.direct-chat-infos --> */}
          <img className="direct-chat-img" src={userPic3} alt="Message User"/>
          {/* <!-- /.direct-chat-img --> */}
          <div className="direct-chat-text">
            {this.props.chat?this.props.chat:""}
          </div>
          {/* <!-- /.direct-chat-text --> */}
      </div>
    );
  }
}
