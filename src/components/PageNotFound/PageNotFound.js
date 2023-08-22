import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='page-not-found'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            <NavLink className='page-not-found__go-back-btn' to='../'>Назад</NavLink>
        </div>
    )
}

export default PageNotFound;