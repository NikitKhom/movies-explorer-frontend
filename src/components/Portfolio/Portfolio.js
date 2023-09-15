import Section from '../Section/Section';

function Portfolio() {
    return (
        <Section
            title='Студент'>
                <div className='portfolio__main-info'>
                    <div className='portfolio__info'>
                        <h2 className='portfolio__name'>Никита</h2>
                        <h3 className='portfolio__about'>Фронтенд-разработчик, 18 лет</h3>
                        <p className='portfolio__main-text'>Я родился и живу в Симферополе, обучаюсь на факультете информатики КФУ. В прошлом году я начал заниматься frontend-разработкой. Параллельно преподавал информатику в частной учебной организации. После того, как прошёл курс по веб-разработке, я совершенствую полученные скилы и изучаю новые стеки, чтобы попасть на стажировку в крупную продуктовую IT компанию.</p>
                        <a className='portfolio__link portfolio__github-link' href='https://github.com/NikitKhom' target='_blank' rel='noreferrer'>Github</a>
                    </div>
                    <div className='portfolio__my-photo'></div>
                </div>
                <h3 className='portfolio__title'>Портфолио</h3>
                <ul className='portfolio__projects-list'>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/how-to-learn' target='_blank' rel='noreferrer'>
                            <p className='portfolio__link-text'>Статичный сайт</p>
                            <p className='portfolio__link-text'>↗</p>
                        </a>
                    </li>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/russian-travel' target='_blank' rel='noreferrer'>
                            <p className='portfolio__link-text'>Адаптивный сайт</p>
                            <p className='portfolio__link-text'>↗</p>
                        </a>

                    </li>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>
                            <p className='portfolio__link-text'>Одностраничное приложение</p>
                            <p className='portfolio__link-text'>↗</p>
                        </a>
                    </li>
                </ul>
        </Section>
    )
}

export default Portfolio;