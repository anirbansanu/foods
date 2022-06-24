import React, { Component } from 'react';

export default class SendBox extends Component {
  render() {
    return (
        <form action="#" method="post">
            <div className="input-group">
            <input type="text" name="message" placeholder="Type Message ..." className="form-control"/>
            <span className="input-group-append">
                <button type="submit" className="btn btn-primary">
                    Send<i class="fab fa-telegram-plane ml-1"></i>
                </button>
            </span>
            </div>
        </form>
    );
  }
}
