import Section from '../Section/Section';

function Portfolio() {
    return (
        <Section
            title='Студент'>
                <div className='portfolio__main-info'>
                    <div className='portfolio__info'>
                        <h2 className='portfolio__name'>Никита</h2>
                        <h3 className='portfolio__about'>Фронтенд-разработчик, 18 лет</h3>
                        <p className='portfolio__main-text'>Я родился и живу в Симферополе, обучаюсь на факультете информатики КФУ. В прошлом году я начал кодить. Параллельно преподавал информатику в частной учебной организации. После того, как прошёл курс по веб-разработке, я пробую попасть на стажировку в крупную продуктовую IT компании.</p>
                        <a className='portfolio__link portfolio__github-link' href='https://github.com/NikitKhom' target='_blank' rel='noreferrer'>Github</a>
                    </div>
                    <div className='portfolio__my-photo'></div>
                </div>
                <h3 className='portfolio__title'>Портфолио</h3>
                <ul className='portfolio__projects-list'>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/how-to-learn' target='_blank' rel='noreferrer'>↗</a>
                    </li>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/russian-travel' target='_blank' rel='noreferrer'>↗</a>
                    </li>
                    <li className='portfolio__link-container'>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
                        <a className='portfolio__link porfolio__project-link' href='https://github.com/NikitKhom/react-mesto-api-full-gha' target='_blank' rel='noreferrer'>↗</a>
                    </li>
                </ul>
        </Section>
    )
}

export default Portfolio;