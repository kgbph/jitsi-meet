import React from 'react';
import { translate } from '../../../../base/i18n';
import { Icon, IconClose } from '../../../../base/icons';

/**
 * Custom header of the {@code BeerChatDialog}.
 */
function Header({ onClose, t }) {
    return (
        <div
            className='invite-more-dialog header'>
            {t('chat.beerChat.title')}
            <Icon
                onClick={onClose}
                src={IconClose} />
        </div>
    );
}

export default translate(Header);
