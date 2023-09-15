import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-2);
    }

    return (
        <div className='page-not-found'>
                <h1 className='page-not-found__title'>404</h1>
                <p className='page-not-found__subtitle'>Страница не найдена</p>
            <button className='page-not-found__go-back-btn' type='button' onClick={goBack}>Назад</button>
        </div>
    )
}

export default PageNotFound;