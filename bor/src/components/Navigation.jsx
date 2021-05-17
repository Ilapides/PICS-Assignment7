import React, { Component } from "react";
import { Link } from "react-router-dom";

// Navigation links to appear at the top of pages in a header

class Navigation extends Component {
    render() {
        return (
            <div>
                <Link className="link" to='/'>Home</Link>
                <Link className="link" to="/login">Log In</Link>
                <Link className="link" to="/user">User Profile</Link>
                <Link className="link" to="/debit">Debit</Link>
                <Link className="link" to="/credit">Credit</Link>
            </div>
        );
    }
}

export default Navigation;