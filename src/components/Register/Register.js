import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';
import { useEffect } from 'react';
import { useFormWithValidation } from '../../hooks/formValidation';

function Register( {handleRegister, isSending} ) {
    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    useEffect(() => {
        resetForm();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.password){
          return;
        }
        handleRegister({
            name: values.name,
            email: values.email,
            password: values.password,
        })
    }
    return (
        <AuthForm
            title='Добро пожаловать!'
            isRegister={true}
            buttonText={isSending ? '...' : 'Регистрация'}
            onSubmit={handleSubmit}
            isDisabled={!isValid || isSending}>
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
                    onChange={handleChange}
                    minLength='5'
                    maxLength='40'
                    value={values.email || ''}
                    errorValue={errors.email || ''}
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