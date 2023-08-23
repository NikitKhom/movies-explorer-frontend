import Section from '../Section/Section';

function Techs() {
    return (
        <Section
            title='Технологии'
            grayTheme={true}>
                <h2 className='techs__title'>7 технологий</h2>
                <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className='techs__container'>
                    <p className='techs__item'>HTML</p>
                    <p className='techs__item'>CSS</p>
                    <p className='techs__item'>JS</p>
                    <p className='techs__item'>React</p>
                    <p className='techs__item'>Git</p>
                    <p className='techs__item'>Express</p>
                    <p className='techs__item'>mongoDB</p>
                </div>
        </Section>
    )
}

export default Techs;