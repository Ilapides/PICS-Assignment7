import React, { Component } from "react";
import Navigation from "./Navigation";
import "../App.css";

// Header has navigation, component display name, and balance

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navigation />
                <h1>{this.props.displayName}</h1>
                Balance: {this.props.balance.toFixed(2)}
            </div>
        );
    }
}

export default Header;