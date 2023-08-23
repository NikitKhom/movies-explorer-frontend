function SearchForm() {
    return (
    <section>
        <form className='search-form'>
            <div className='search-form__seacrh-line'>
                <input className='search-form__input' type='text' name='search' placeholder='Фильм'></input>
                <button className='search-form__submit-btn' type='submit' name='submit'>Найти</button>
            </div>
            <input className='search-form__checkbox' type='checkbox' id='filter'></input>
            <label className='search-form__filter' for='filter'>
                <div className='search-form__custom-checkbox'></div>
                <p className='search-form__checkbox-title'>Короткометражки</p>
            </label>
        </form>
    </section>

    )
}

export default SearchForm;