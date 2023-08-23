import Section from '../Section/Section';

function AboutProject() {
    return (
        <Section 
            title='О проекте'
            isFirst={true}>
                <div id='more-info' className='about-project__info about-project__info_type_text'>
                    <div className='about-project__paragraph'>
                        <h3 className='about-project__title'>Дипломный проект включал 5 этапов</h3>
                        <p className='about-project__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about-project__paragraph'>
                        <h3 className='about-project__title'>На выполнение диплома ушло 5 недель</h3>
                        <p className='about-project__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='about-project__info about-project__info_type_chart'>
                    <p className='about-project__duration about-project__duration_color_green'>1 неделя</p>
                    <p className='about-project__duration about-project__duration_color_gray'>4 недели</p>
                    <p className='about-project__dev'>Back-end</p>
                    <p className='about-project__dev'>Front-end</p>
                </div>

        </Section>
    )
}

export default AboutProject;