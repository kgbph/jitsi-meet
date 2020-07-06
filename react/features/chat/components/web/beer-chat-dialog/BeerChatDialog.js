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
    }

    _onAmountChange(amount) {
        this.setState({ amount: amount })
    }

    _onMessageChange(message) {
        this.setState({ message: message })
    }

    render() {
        return (
            <Dialog
                customHeader={Header}
                disableEnter={true}
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
