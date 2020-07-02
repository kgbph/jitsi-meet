// @flow

import React, {  } from 'react';

import { Dialog } from '../../../../base/dialog';
import { translate } from '../../../../base/i18n';
import { connect } from '../../../../base/redux';

import Header from './Header';

type Props = {

    /**
     * Invoked to obtain translated strings.
     */
    t: Function
};

/**
 * Component that renders the beer chat dialog.
 *
 * @returns {React$Element<any>}
 */
function BeerChatDialog() {

    return (
        <Dialog
            customHeader = { Header }
            hideCancelButton = { true }
            submitDisabled = { true }
            titleKey = 'security.securityOptions'
            width = { 'small' }>
            <div>
                Test
            </div>
        </Dialog>
    );
}

export default translate(connect()(BeerChatDialog));
