import { translate } from '../../../../base/i18n';
import { IconBeer } from '../../../../base/icons';
import { connect } from '../../../../base/redux';
import { AbstractButton } from '../../../../base/toolbox';
import { openBeerChatDialog } from '../../../actions';

class BeerChatDialogButton extends AbstractButton {
    accessibilityLabel = 'toolbar.accessibilityLabel.security';
    icon = IconBeer;
    label = 'chat.beerChat.tooltip';
    toggledIcon = IconBeer;
    tooltip = 'chat.beerChat.tooltip';

    _handleClick() {
        this.props.onClick();
    }
}

const mapDispatchToProps = {
    onClick: () => openBeerChatDialog()
};

export default translate(connect(() => ({}), mapDispatchToProps)(BeerChatDialogButton));
