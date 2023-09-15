import logo from '../../images/logo.svg';
import globus from '../../images/globus.svg'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Promo({ loggedIn }) {
    return (
        <>  {loggedIn
                ? <Header mainTheme={true}/>
                : <header className='promo__header'>
                    <img className='promo__logo' src={logo} alt='Логотип сайта'></img>
                    <ul className='promo__buttons'>
                        <li className='promo__button'>
                            <Link to='/sign-up' className='promo__button_type_signup'>Регистрация</Link>
                        </li>
                        <li className='promo__button'>
                            <Link to='/sign-in' className='promo__button_type_signin'>Войти</Link>
                        </li>
                    </ul>
                </header>
            }

            <section className='promo'>
                <div className='promo__banner'>
                    <div className='promo__paragraph'>
                        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img  className='promo__image' src={globus} alt='Картинка глобуса'></img>
                    
                </div>
                <a className='promo__button promo__learn-more-button' href='#about-project'>Узнать больше</a>

            </section>
        </>

    )
}

export default Promo;