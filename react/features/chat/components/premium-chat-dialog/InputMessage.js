import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';

class InputMessage extends React.Component {
    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className='premiumchat-message'>
                <div className='premiumchat-message-form'>
                    <TextareaAutosize
                        className='premiumchat-message-input'
                        maxRows={5}
                        onChange={this._onChange}
                        placeholder={this.props.t('chat.premium.inputPlaceholder')}
                        value={this.props.message} />
                </div>
            </div>
        );
    }
}

export default translate(connect()(InputMessage));
