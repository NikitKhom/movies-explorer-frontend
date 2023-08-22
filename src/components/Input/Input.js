function Input({title, id, name, type}) {
    return (
        <>
            <p className='input__title'>{title}</p>
            <input className='input' id={id} name={name} type={type}/>
            <span className='input__error'>error</span>
        </>
    )
}

export default Input;