import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/formValidation';
import { EMAIL_REGEX } from '../../utils/constants';

function Login( {handleLogin, isSending} ) {
    
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
		if (!email || !values.password){
		  return;
		}
		handleLogin({
            email: email,
			password: values.password,
		})
	}

    return (
        <AuthForm
            title='Рады видеть!'
            buttonText={isSending ? '...' : 'Вход'}
            onSubmit={handleSubmit}
            isDisabled={!isValid || isSending || !emailValid}>
                    <Input
                        title='E-mail'
                        id='email'
                        name='email'
                        type='email'
                        onChange={handleEmailChange}
                        minLength='5'
                        maxLength='40'
                        pattern='/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/'
                        // value={values.email|| ''}
                        // errorValue={errors.email || ''}
                        value={email}
                        errorValue={emailError}
                    />
                    <Input
                        title='Пароль'
                        id='password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        minLength='8'
                        maxLength='30'
                        value={values.password || ''}
                        errorValue={errors.password || ''}
                    />
        </AuthForm>
    )
}

export default Login;