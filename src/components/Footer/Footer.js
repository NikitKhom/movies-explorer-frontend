function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__container'>
            <p className='footer__copyright'>&copy; 2023</p>
            <ul className='footer__links'>
                <li className='footer__link-container'>
                    <a className='footer__link' href='http'>Яндекс.Практикум</a>
                </li>
                <li className='footer__link-container'>
                    <a className='footer__link' href='http'>Github</a>
                </li>
            </ul>
            </div>

        </footer>
    )
}

export default Footer;