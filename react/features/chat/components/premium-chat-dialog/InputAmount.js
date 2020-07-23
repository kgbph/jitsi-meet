import React from 'react';
import CurrencyInput from 'react-currency-input';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';

class InputAmount extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event, maskedvalue, floatvalue) {
        this.props.onChange(floatvalue);
    }

    render() {
        return (
            <div className='premiumchat-amount'>
                <label>{this.props.t('chat.premium.amountLabel')}</label>
                <CurrencyInput
                    autoFocus
                    className='premiumchat-amount-input'
                    prefix={this.props.t('chat.premium.amountSuffix')}
                    selectAllOnFocus={true}
                    value={this.props.amount}
                    onChangeEvent={this._onChange}
                />
            </div>
        );
    }
}

export default translate(connect()(InputAmount));
