import Navigation from '../Navigation/Navigation';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';   

function Header({ mainTheme = false}) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    function toggleMenu() {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header className={`header ${mainTheme ? 'header_theme_blue' : ''}`}>
            <Link to='/' className='header__logo'/>
            <div className='header__wrapper'><Navigation mainTheme={mainTheme}/></div>
            <div className='header__wrapper'><ProfileButton /></div>
            <button className={`header__burger ${mainTheme ? 'header__burger_theme_blue' : ''}`} type='button' onClick={toggleMenu}></button>
            <div className={`header__menu ${isMenuActive ? 'header__menu_active' : ''}`}>
                <div className='header__menu-content'>
                    <button className='header__close-button' type='button' onClick={toggleMenu}></button>
                    <Navigation className='header__navbar' />
                    <ProfileButton className='header__profile-button'/>
                </div>
            </div>

        </header>
        
    )
}

export default Header;