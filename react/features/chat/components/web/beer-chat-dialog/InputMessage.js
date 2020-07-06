import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

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
            <div className='beerchat-message'>
                <div className='beerchat-message-form'>
                    <TextareaAutosize
                        className='beerchat-message-input'
                        maxRows={5}
                        onChange={this._onChange}
                        placeholder={this.props.t('chat.beerChat.input.placeholder')}
                        value={this.props.message} />
                </div>
            </div>
        );
    }
}

export default translate(connect()(InputMessage));
