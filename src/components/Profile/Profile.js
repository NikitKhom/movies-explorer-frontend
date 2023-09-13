import Header from '../Header/Header';
import { useEffect, useContext, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useNavigate } from 'react-router-dom';

function Profile({ handleUpdateUser, setLoggedIn }) {
    const currentUser = useContext(CurrentUserContext);
    const [formValue, setFormValue] = useState({
        email: currentUser.email,
        name: currentUser.name,
    }) 
    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
	}
    const navigate = useNavigate();
    
    const isDisabled = (!formValue.name || !formValue.email)
        || (formValue.name === currentUser.name && formValue.email === currentUser.email);

    useEffect(() => {
        setFormValue({
            email: currentUser.email,
            name: currentUser.name,
        });
    }, [])

    function signOut() {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/sign-in', {replace: true});
      }

    function handleSubmit(e) {
        e.preventDefault();
        if (isDisabled) {
            return;
        }
        handleUpdateUser({
            name: formValue.name,
            email: formValue.email
        })
    }

    return (
        <>
            <Header></Header>
            <main className='profile'>
                <h1 className='profile__welcome'>Привет, {currentUser.name}!</h1>
                <form className='profile__form'>
                    <fieldset className='profile__fieldset'>
                        <div className='profile__block'>
                            <h2 className='profile__block-title'>Имя</h2>
                            <input className='profile__info' name='name' type='text' value={formValue.name} onChange={handleChange} required autoComplete='off'></input>
                        </div>
                        <div className='profile__block'>
                            <h2 className='profile__block-title'>E-mail</h2>
                            <input className='profile__info' name='email' type='email' value={formValue.email} onChange={handleChange} required autoComplete='off'></input>
                        </div>
                    </fieldset>
                    {isDisabled 
                    ? <button className='profile__submit-btn profile__submit-btn_disabled' onClick={handleSubmit} disabled>Редактировать</button>
                    : <button className='profile__submit-btn' onClick={handleSubmit}>Редактировать</button>}
                    
                </form>
                <button className='profile__logout-btn' onClick={signOut}>Выйти из аккаунта</button>
            </main>
        </>

    )
}

export default Profile;