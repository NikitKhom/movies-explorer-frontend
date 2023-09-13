function Input({ 
    title,
    id,
    name,
    type,
    onChange,
    minLength,
    maxLength,
    value,
    errorValue,
    }) 
    {
    return (
        <label className='input__label'>
            <p className='input__title'>{title}</p>
            <input className='input'
                id={id}
                name={name}
                type={type}
                required 
                onChange={onChange}
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                />
            <span className='input__error'>{errorValue}</span>
        </label>
    )
}

export default Input;