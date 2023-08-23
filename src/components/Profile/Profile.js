import Header from '../Header/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile({name, email}) {
    const [formValue, setFormValue] = useState({ name, email });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
          ...formValue,
          [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formValue.password || !formValue.email) {
            return;
        }
    }

    return (
        <>
            <Header></Header>
            <main className='profile'>
                <h1 className='profile__welcome'>Привет, {formValue.name}!</h1>
                <form className='profile__form'>
                    <fieldset className='profile__fieldset'>
                        <div className='profile__block'>
                            <h2 className='profile__block-title'>Имя</h2>
                            <input className='profile__info' name='name' value={formValue.name} onChange={handleChange}></input>
                        </div>
                        <div className='profile__block'>
                            <h2 className='profile__block-title'>E-mail</h2>
                            <input className='profile__info' name='email' value={formValue.email} onChange={handleChange}></input>
                        </div>
                    </fieldset> 
                    <button className='profile__submit-btn' onClick={handleSubmit}>Редактировать</button>
                </form>
                <Link to='/' className='profile__logout-btn'>Выйти из аккаунта</Link>
            </main>
        </>

    )
}

export default Profile;