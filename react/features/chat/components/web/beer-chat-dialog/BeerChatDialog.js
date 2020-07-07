import React from 'react';

import { sendBeerChat } from '../../../actions';
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
        const { amount, message } = this.state;

        this.props._onSubmit(amount, message);

        return true;
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

function mapDispatchToProps(dispatch) {
    return {
        _onSubmit(amount, message) {
            dispatch(sendBeerChat(amount, message));
        }
    };
};

export default translate(connect(() => ({}), mapDispatchToProps)(BeerChatDialog));
