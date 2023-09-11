function Input({ 
    title,
    id,
    name,
    type,
    onChange,
    minLength,
    maxLength,
    value,
    pattern,
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
                pattern={pattern}
                />
            <span className='input__error'>{errorValue}</span>
        </label>
    )
}

export default Input;