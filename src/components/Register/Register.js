import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/formValidation';
import { EMAIL_REGEX } from '../../utils/constants';

function Register( {handleRegister, isSending} ) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ emailValid, setEmailValid ] = useState(false);

    useEffect(() => {
        resetEmailInput();
        resetForm();
    }, []);


    const resetEmailInput = () => {
        setEmail('');
        setEmailError('');
        setEmailValid(false);
    }

    const handleEmailChange = (e) => {  //Валидирую email отдельно, так как валидация инпута по умолчанию пропускает неверные значения
        const currentValue = e.target.value;
        setEmail(currentValue);
        if (currentValue === '') {
            setEmailError('Заполните это поле.');
            setEmailValid(false);
        } else if (!EMAIL_REGEX.test(currentValue)) {
            setEmailError('E-mail указан некорректно');
            setEmailValid(false);
        } else {
            setEmailError('');
            setEmailValid(true);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.name || !email || !values.password){
          return;
        }
        handleRegister({
            name: values.name,
            email: email,
            password: values.password,
        })
    }
    return (
        <AuthForm
            title='Добро пожаловать!'
            isRegister={true}
            buttonText={isSending ? '...' : 'Регистрация'}
            onSubmit={handleSubmit}
            isDisabled={!isValid || isSending || !emailValid}>
                <Input
                    title='Имя'
                    id='name'
                    name='name'
                    type='text'
                    onChange={handleChange}
                    minLength='2'
                    maxLength='30'
                    value={values.name || ''}
                    errorValue={errors.name || ''}
                />
                <Input
                    title='E-mail'
                    id='email'
                    name='email'
                    type='email'
                    onChange={handleEmailChange}
                    minLength='5'
                    maxLength='40'
                    value={email || ''}
                    errorValue={emailError || ''}
                />
                <Input
                    title='Пароль'
                    id='password'
                    name='password' 
                    type='password'
                    onChange={handleChange}
                    minLength='8'
                    maxLength='40'
                    value={values.password || ''}
                    errorValue={errors.password || ''}
                />
        </AuthForm>
    )
}

export default Register;