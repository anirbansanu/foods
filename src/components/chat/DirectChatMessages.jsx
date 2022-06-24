import React, { Component } from 'react';
import LeftChat from './LeftChat';
import RightChat from './RightChat';

export default class DirectChatMessages extends Component {
  render() {
    return (
        <div className="direct-chat-messages">
        {/* <!-- Message. Default to the left --> */}
            <LeftChat user="User Name" timeStamp="time stamp" chat="Is this template really for free? That's unbelievable!"/>
        {/* <!-- /.direct-chat-msg --> */}

        {/* <!-- Message to the right --> */}
            <RightChat user="User Name" timeStamp="time stamp" chat="You better believe it!"/>
        {/* <!-- /.direct-chat-msg --> */}
      </div>
    );
  }
}
