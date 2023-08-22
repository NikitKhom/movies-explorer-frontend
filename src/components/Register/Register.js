import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

function Register() {
    return (
        <>
            <AuthForm
                title='Добро пожаловать!'
                buttonText='Зарегистрироваться'
                isRegister={true}>
                    <Input title='Имя' id='name' name='name' type='text'></Input>
                    <Input title='E-mail' id='email' name='email' type='email'></Input>
                    <Input title='Пароль' id='password' name='password' type='password'></Input>
            </AuthForm>

        </>

        
    )
}

export default Register;