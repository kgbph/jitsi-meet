import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

/**
 * Implements a React Component for submitting a beer chat amount.
 *
 * @extends Component
 */
class InputAmount extends Component {
    state = {
        amount: 0.00,
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
                <CurrencyInput
                    autoFocus
                    className='beerchat-amount-input'
                    prefix='$'
                    selectAllOnFocus={true}
                    value={this.state.amount}
                    onChangeEvent={this._onAmountChange}
                />
            </div>
        );
    }

    /**
     * Updates the known amount the user is drafting.
     *
     * @param {string} event - Keyboard event.
     * @param {string} maskedvalue - Masked value.
     * @param {string} floatvalue - Float value.
     * @private
     * @returns {void}
     */
    _onAmountChange(event, maskedvalue, floatvalue) {
        this.setState({ amount: floatvalue })
    }
}

export default translate(connect()(InputAmount));
