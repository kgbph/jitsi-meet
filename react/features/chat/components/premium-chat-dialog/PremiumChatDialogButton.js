import { translate } from '../../../base/i18n';
import { IconBeer } from '../../../base/icons';
import { connect } from '../../../base/redux';
import { AbstractButton } from '../../../base/toolbox';
import { openPremiumChatDialog } from '../../actions';

class PremiumChatDialogButton extends AbstractButton {
    accessibilityLabel = 'toolbar.accessibilityLabel.security';
    icon = IconBeer;
    label = 'chat.premium.title';
    toggledIcon = IconBeer;
    tooltip = 'chat.premium.title';

    _handleClick() {
        this.props.onClick();
    }
}

const mapDispatchToProps = {
    onClick: () => openPremiumChatDialog()
};

export default translate(connect(() => ({}), mapDispatchToProps)(PremiumChatDialogButton));
