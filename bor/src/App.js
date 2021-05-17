import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Transactions from './components/Transactions'

// class definition
class App extends Component {
    constructor(props) {
        super(props);
        // bind handler to this App
        this.ambihandler = this.ambihandler.bind(this);
        this.state = {
            balance: 250000,
            currentUser: {
                userName: 'Jennifer Raab',
                joined: '04/05/67',
            },
        }
    }

    // handler for transactions
    ambihandler(quantity, key) {
        this.setState({
            balance: this.state.balance + quantity * key
        })
    }

    // log in from spec
    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    render() {
        // create components to pass
        const HomeComponent = () => (
            <Home
                balance={this.state.balance}
            />
        );
        const UserProfileComponent = () => (
            <UserProfile
                userName={this.state.currentUser.userName}
                joined={this.state.currentUser.joined}
                balance={this.state.balance}
            />
        );
        const LogInComponent = () => (
            <LogIn
                user={this.state.currentUser}
                mockLogIn={this.mockLogIn}
                {...this.props}
            />
        );
        const DebitComponent = () => (
            <Transactions
                recordType='Debits'
                balance={this.state.balance}
                ambihandler={this.ambihandler}
            />
        );
        const CreditComponent = () => (
            <Transactions
                recordType='Credits'
                balance={this.state.balance}
                ambihandler={this.ambihandler}
            />
        );
        // return router with path to each component rendered
        return (
            <Router>
                <Route exact path='/' render={HomeComponent} />
                <Route exact path='/user' render={UserProfileComponent} />
                <Route exact path='/login' render={LogInComponent} />
                <Route exact path='/debit' render={DebitComponent} />
                <Route exact path='/credit' render={CreditComponent} />
            </Router>
        );
    }
}

export default App;
