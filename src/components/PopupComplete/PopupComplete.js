import InfoTooltip from '../InfoTooltip/InfoTooltip';
import completeIcon from '../../images/Union.svg';

function PopupComplete({ isOpen, onClose, title}) {
    return (
        <InfoTooltip 
        isSuccesful={true}
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        icon={completeIcon}
        />
    )
}

export default PopupComplete;