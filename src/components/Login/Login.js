import AuthForm from '../AuthForm/AuthForm';
import Input from '../Input/Input';

function Login() {
    return (
        <AuthForm
            title='Рады видеть!'
            buttonText='Войти'>
                    <Input title='E-mail' id='email' name='email' type='email'></Input>
                    <Input title='Пароль' id='password' name='password' type='password'></Input>
        </AuthForm>
    )
}

export default Login;