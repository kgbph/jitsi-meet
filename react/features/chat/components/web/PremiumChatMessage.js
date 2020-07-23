import React from 'react';
import { toArray } from 'react-emoji-render';

import { translate } from '../../../base/i18n';
import { Linkify } from '../../../base/react';

import AbstractChatMessage from '../AbstractChatMessage';

/**
 * Renders a single premium chat message.
 */
class PremiumChatMessage extends AbstractChatMessage {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { message } = this.props;
        const processedMessage = [];

        // content is an array of text and emoji components
        const content = toArray(this._getMessageText(), { className: 'smiley' });

        content.forEach(i => {
            if (typeof i === 'string') {
                processedMessage.push(<Linkify key={i}>{i}</Linkify>);
            } else {
                processedMessage.push(i);
            }
        });

        return (
            <div className='chatmessage-wrapper premiummessage'>
                <div className='chatmessage premiummessage'>
                    <div className='replywrapper'>
                        <div className='messagecontent'>
                            <div className='premium-notification'>
                                {this.props.t('chat.premium.notification', {
                                    sender: message.displayName
                                })}
                            </div>
                            <div className='premium-notification'>
                                {this.props.t('chat.premium.amountSuffix')} {Number(message.amount).toFixed(2)}
                            </div>
                            <div className='usermessage'>
                                {processedMessage}
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.showTimestamp && this._renderTimestamp()}
            </div>
        );
    }

    /**
     * Renders the time at which the message was sent.
     *
     * @returns {React$Element<*>}
     */
    _renderTimestamp() {
        return (
            <div className='timestamp'>
                {this._getFormattedTimestamp()}
            </div>
        );
    }
}

export default translate(PremiumChatMessage);
