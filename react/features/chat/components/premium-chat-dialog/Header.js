import React from 'react';
import { translate } from '../../../base/i18n';
import { Icon, IconClose } from '../../../base/icons';

function Header({ onClose, t }) {
    return (
        <div
            className='invite-more-dialog header'>
            {t('chat.premium.title')}
            <Icon
                onClick={onClose}
                src={IconClose} />
        </div>
    );
}

export default translate(Header);
