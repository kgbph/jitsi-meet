// @flow

import { translate } from '../../../../base/i18n';
import { IconBeer } from '../../../../base/icons';
import { connect } from '../../../../base/redux';
import { AbstractButton } from '../../../../base/toolbox';
import { openBeerChatDialog } from '../../../actions';

/**
 * Implements an {@link AbstractButton} to open the beer chat dialog.
 */
class BeerChatDialogButton extends AbstractButton {
    accessibilityLabel = 'toolbar.accessibilityLabel.security';
    icon = IconBeer;
    label = 'chat.beerChat.tooltip';
    toggledIcon = IconBeer;
    tooltip = 'chat.beerChat.tooltip';

    /**
     * Handles clicking / pressing the button, and opens / closes the appropriate dialog.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        this.props.onClick();
    }
}

/**
 * Maps dispatching of some action to React component props.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @returns {Props}
 */
const mapDispatchToProps = {
    onClick: () => openBeerChatDialog()
};

export default translate(connect(() => ({}), mapDispatchToProps)(BeerChatDialogButton));
