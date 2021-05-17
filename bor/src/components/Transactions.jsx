import React, { Component } from 'react';
import Header from './Header';

// template for both debit and credit transactions

class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            existingTransactions: [],
            newDescription: '',
            newAmount: 0,
        };
    }

    // get credit or debit depending on recordType
    fetchRecords = async (event) => {
        let response = await fetch('https://moj-api.herokuapp.com/' + this.props.recordType, {
            method: 'GET',
        });
        const result = await response.json();
        this.setState({ existingTransactions: result });
    };

    // React lifecycle method to make API requests
    componentDidMount() {
        this.fetchRecords();
    }

    onChange = (string, event) => {
        this.setState({ [string]: event.target.value });
    };

    // input validation
    onSubmit = (event) => {
        event.preventDefault();
        if (isNaN(this.state.newAmount)){
            alert("Amounts must be real numbers.");
        }
        else if (this.state.newDescription === '' || this.state.newAmount === '') {
            alert("Fields cannot be blank.");
        }
        else {
            this.AddTransaction();
        }
    };

    // add transaction to list and update balance
    AddTransaction = async (event) => {
        const newTransaction = {
            description: this.state.newDescription,
            amount: this.state.newAmount,
            date: new Date(Date.now()).toLocaleDateString(),
        };
        let PriorTransactions = [...this.state.existingTransactions, newTransaction];
        this.props.ambihandler(this.state.newAmount, (this.props.recordType === 'Debits' ? -1 : 1));
        this.setState({ existingTransactions: PriorTransactions });
    };

    render() {
        const { newDescription } = this.state.newDescription;
        const { newAmount } = this.state.newAmount;
        return (
            <div>
                <Header balance={this.props.balance} displayName={this.props.recordType} />
                <div>
                    <ul>
                        {this.state.existingTransactions.map((info) => (
                            <p>
                                {'$' + info.amount + ' '}
                                {info.description + ' '}
                                {info.date}
                            </p>
                        ))}
                    </ul>
                </div>
                <form onSubmit={this.onSubmit}>
                    <label>Amount: </label>
                    <input
                        type='text'
                        onChange={(event) => this.onChange('newAmount', event)}
                        value={newAmount}
                    />
                    <label>Description: </label>
                    <input
                        type='text'
                        onChange={(event) => this.onChange('newDescription', event)}
                        value={newDescription}
                    />
                    <input type='submit' value={'Add ' + this.props.recordType} />
                </form>
            </div>
        );
    }
}

export default Transactions;
