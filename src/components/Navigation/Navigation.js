import { Link, NavLink } from 'react-router-dom';

function Navigation({ mainTheme = false }) {
    return (
        <nav className={`navigation ${mainTheme ? 'navigation_theme_blue' : ''}`}>
            <Link to='/' className='navigation__title'>Главная</Link>
            <NavLink to='/movies' className={({isActive}) => `navigation__title ${isActive ? 'navigation__title_active' : ''}`}>Фильмы</NavLink>
            <NavLink to='/saved-movies' className={({isActive}) => `navigation__title ${isActive ? 'navigation__title_active' : ''}`}>Сохранённые фильмы</NavLink>
        </nav>
    )
}

export default Navigation;