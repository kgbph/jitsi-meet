import React from 'react';
import { Dialog } from '../../../../base/dialog';
import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';
import Header from './Header';
import InputAmount from './InputAmount';
import InputMessage from './InputMessage';

class BeerChatDialog extends React.Component {
    state = {
        amount: 0.00,
        message: ''
    };

    constructor(props) {
        super(props);
        this._onAmountChange = this._onAmountChange.bind(this);
        this._onMessageChange = this._onMessageChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onAmountChange(amount) {
        this.setState({ amount: amount });
    }

    _onMessageChange(message) {
        this.setState({ message: message });
    }

    _onSubmit() {
        alert('Submit!');
    }

    render() {
        return (
            <Dialog
                customHeader={Header}
                disableEnter={true}
                onSubmit={this._onSubmit}
                width={'small'}>
                <InputAmount
                    onChange={this._onAmountChange} />
                <InputMessage
                    onChange={this._onMessageChange} />
            </Dialog>
        );
    }
}

export default translate(connect()(BeerChatDialog));
