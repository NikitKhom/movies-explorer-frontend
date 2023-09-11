function SearchForm({ onSubmit, onInputChange, onCheckboxChange, checked, value }) {
    return (
    <section>
        <form className='search-form' onSubmit={onSubmit}>
            <div className='search-form__seacrh-line'>
                <input className='search-form__input' type='text' name='search' placeholder='Фильм' value={value} onChange={onInputChange}/>
                <button className='search-form__submit-btn' type='submit'>Найти</button>
            </div>
            <input className='search-form__checkbox' checked={checked} type='checkbox' id='filter' onChange={onCheckboxChange} autoComplete='off'/>
            <label className='search-form__filter' htmlFor='filter'>
                <div className='search-form__custom-checkbox'></div>
                <p className='search-form__checkbox-title'>Короткометражки</p>
            </label>
        </form>
    </section>

    )
}

export default SearchForm;