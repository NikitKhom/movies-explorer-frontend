import { Link } from 'react-router-dom';
import icon from '../../images/profile-icon.svg';

function ProfileButton() {
    return (
        <Link to='/profile' className='profile-button'>
            Аккаунт
            <img className='profile-button__icon' src={icon} alt='Ссылка на профиль'></img>
        </Link>
    )
}

export default ProfileButton;