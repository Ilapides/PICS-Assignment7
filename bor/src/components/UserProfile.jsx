import React, { Component } from 'react';
import Header from './Header';

// Header + display of user info

class UserProfile extends Component {
  render() {
    return (
      <div>
        <Header balance={this.props.balance} displayName={'User Profile'}/>
        <div>Username: {this.props.userName}</div>
        <div>Joined: {this.props.joined}</div>
      </div>
    );
  }
}

export default UserProfile;
