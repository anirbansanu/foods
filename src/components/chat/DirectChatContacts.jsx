import React, { Component } from 'react';
import userPic from '../../img/user1-128x128.jpg';
import { Link } from 'react-router-dom';

export default class DirectChatContacts extends Component {
  render() {
    return (
        <div className="direct-chat-contacts" style={{height:"inherit"}}>
            <ul className="contacts-list">
            <li>
                <Link href="#">
                <img className="contacts-list-img" src={userPic} alt="User Avatar"/>

                <div className="contacts-list-info">
                    <span className="contacts-list-name">
                    Count Dracula
                    <small className="contacts-list-date float-right">2/28/2015</small>
                    </span>
                    <span className="contacts-list-msg">How have you been? I was...</span>
                </div>
                {/* <!-- /.contacts-list-info --> */}
                </Link>
            </li>
            {/* <!-- End Contact Item --> */}
            </ul>
            {/* <!-- /.contatcts-list --> */}
        </div>
    );
  }
}
