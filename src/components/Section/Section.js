function Section({title, grayTheme = false, isFirst = false,children}) {
    return (
        <section className={`section ${grayTheme && 'section_theme_gray'}`} id={`${isFirst && 'about-project'}`}>
            <h2 className='section__title'>{title}</h2>
            {children}
        </section>
    )
}

export default Section;