// @flow

import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

/**
 * Implements a React Component for submitting a beer chat message
 *
 * @extends Component
 */
class InputMessage extends Component {

    state = {
        message: '',
    };

    /**
     * Initializes a new {@code InputMessage} instance.
     *
     * @param {Object} props - The read-only properties with which the new
     * instance is to be initialized.
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once for every instance.
        this._onMessageChange = this._onMessageChange.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <div className = 'beerchat-message' >
                <div className = 'beerchat-message-form'>
                    <TextareaAutosize
                        className = 'beerchat-message-input'
                        maxRows = { 5 }
                        onChange = { this._onMessageChange }
                        placeholder = { this.props.t('chat.beerChat.input.placeholder') }
                        value = { this.state.message } />
                </div>
            </div>
        );
    }

    /**
     * Updates the known message the user is drafting.
     *
     * @param {string} event - Keyboard event.
     * @private
     * @returns {void}
     */
    _onMessageChange(event) {
        this.setState({ message: event.target.value });
    }
}

export default translate(connect()(InputMessage));
