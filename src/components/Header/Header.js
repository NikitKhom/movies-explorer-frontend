import Navigation from '../Navigation/Navigation';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';   

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header className='header'>
            <Link to='/' className='header__logo'></Link>
            <div className='header__wrapper'><Navigation></Navigation></div>
            <div className='header__wrapper'><ProfileButton></ProfileButton></div>
                

            <button className='header__burger' type='button' onClick={toggleMenu}></button>
            <div className={`header__menu ${isMenuActive ? 'header__menu_active' : ''}`}>
                <div className='header__menu-content'>
                    <button className='header__close-button' type='button' onClick={toggleMenu}></button>
                    <Navigation className='header__navbar'></Navigation>
                    <ProfileButton className='header__profile-button'></ProfileButton>
                </div>
            </div>

        </header>
        
    )
}

export default Header;