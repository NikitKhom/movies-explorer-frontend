import InfoTooltip from '../InfoTooltip/InfoTooltip';
import errorIcon from '../../images/Union-error.svg';

function PopupError({ isOpen, onClose }) {
    return (
        <InfoTooltip 
        isSuccesful={false}
        isOpen={isOpen}
        onClose={onClose}
        title='Что-то пошло не так! Попробуйте ещё раз.'
        icon={errorIcon}
        />
    )
}

export default PopupError;