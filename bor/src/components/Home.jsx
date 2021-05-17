import React, { Component } from 'react';
import Header from './Header';

// Just a Header with an extra piece of text

class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          <span>Bank of React</span>
        </h1>
        <br/>
        <Header balance={this.props.balance} displayName={'Home'}/>
      </div>
    );
  }
}
export default Home;
