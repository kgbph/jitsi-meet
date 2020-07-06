import React from 'react';
import { Dialog } from '../../../../base/dialog';
import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

import Header from './Header';
import InputAmount from './InputAmount';
import InputMessage from './InputMessage';

/**
 * Component that renders the beer chat dialog.
 */
function BeerChatDialog() {

    return (
        <Dialog
            customHeader={Header}
            width={'small'}>
            <InputAmount />
            <InputMessage />
        </Dialog>
    );
}

export default translate(connect()(BeerChatDialog));
