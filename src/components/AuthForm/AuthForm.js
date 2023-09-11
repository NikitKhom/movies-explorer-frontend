import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
function AuthForm({ 
    title,
    buttonText,
    isRegister = false,
    onSubmit,
    isDisabled = true,
    children
    }) 
    {
    return(
        <div className='auth-form'>
            <img className='auth-form__logo' src={logo} alt='Логотип сайта'></img>
            <h1 className='auth-form__title'>{title}</h1>
            <form
                className='auth-form__form'
                onSubmit={onSubmit}
                noValidate>
                {children}
                {isDisabled
                ? <button className='auth-form__button auth-form__button_disabled' type='submit' disabled>{buttonText}</button>
                : <button className='auth-form__button' type='submit'>{buttonText}</button>}
            </form>
            <div className='auth-form__message'>  
                <p className='auth-form__question'>{isRegister ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}</p>
                <Link to={isRegister ? '/sign-in' : '/sign-up'} className='auth-form__link'>{isRegister ? 'Войти' : 'Регистрация'}</Link>
            </div>
        </div>

    )
}

export default AuthForm;