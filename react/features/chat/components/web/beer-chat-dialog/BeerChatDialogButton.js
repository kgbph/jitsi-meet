// @flow

import { translate } from '../../../../base/i18n';
import { IconBeer } from '../../../../base/icons';
import { connect } from '../../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../../base/toolbox';
import { openBeerChatDialog } from '../../../actions';


type Props = AbstractButtonProps & {

    /**
     * On click handler that opens the security dialog.
     */
    onClick: Function
};


/**
 * Implements an {@link AbstractButton} to open the security dialog.
 */
class BeerChatDialogButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'toolbar.accessibilityLabel.security';
    icon = IconBeer;
    label = 'toolbar.security';
    toggledIcon = IconBeer;
    tooltip = 'toolbar.security';

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
 * Maps part of the redux state to the component's props.
 *
 * @param {Object} state - The redux store/state.
 * @returns {Props}
 */
function mapStateToProps(state: Object) {
    return {};
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

export default translate(connect(mapStateToProps, mapDispatchToProps)(BeerChatDialogButton));
