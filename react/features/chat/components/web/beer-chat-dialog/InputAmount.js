// @flow

import React, { Component } from 'react';

import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

/**
 * Implements a React Component for submitting a beer chat amount.
 *
 * @extends Component
 */
class InputAmount extends Component {
    state = {
        amount: 0,
    };

    /**
     * Initializes a new {@code InputAmount} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once for every instance.
        this._onAmountChange = this._onAmountChange.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <div className='beerchat-amount'>
                <label>{this.props.t('chat.beerChat.amount.label')}</label>
                <input
                    className='beerchat-amount-input'
                    id='beerchat-amount'
                    value={this.state.amount}
                    onChange={this._onAmountChange}
                    autoFocus />
                <label>{this.props.t('chat.beerChat.amount.currency')}</label>
            </div>
        );
    }

    /**
     * Updates the known amount the user is drafting.
     *
     * @param {string} event - Keyboard event.
     * @private
     * @returns {void}
     */
    _onAmountChange(event) {
        this.setState({ amount: event.target.value.replace(/\D/,'') })
    }
}

export default translate(connect()(InputAmount));
