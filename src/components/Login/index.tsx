import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

import backgroundImg from '../../assets/background.svg';
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles'

const schemaLogin = z.object({
  email: z
    .string()
    .min(1, {message: 'Por favor informe e-mail'})
    .email({message: 'Por favor informe e-mail válido'}),
  password: z
    .string()
    .min(8, 'Por favor informe uma senha maior que 08(oito) caracteres')
});

type TypeLogin = z.infer<typeof schemaLogin>;

export function Login() {

  function handleLogin(data: TypeLogin): void {
    console.log(data)
  }

  const { register, handleSubmit, formState: {errors} } = useForm<TypeLogin>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaLogin),
  });

  return(
    <Container>
      <Content>
        <div className='form-container'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <img src={logoImg} alt="vertigo-img" />
            <h1>Acesse a plataforma</h1>
            <p>
              Faça login ou registre-se para começar a construir seus 
              projetos ainda hoje.
            </p>

            <span>{errors?.email?.message}</span>
            <input 
              type="email" 
              placeholder='Digite seu e-mail'
              {...register('email')}
             />

            <a className='forgot-password' href="#">Esqueceu a senha?</a>

            <input
             placeholder='Digite a senha' 
             type='password'
             {...register('password')}
            />
            <span>{errors?.password?.message}</span>

            <button>Entrar</button>
            <p>Ainda não tem conta? <a className="sign-up" href="#">Inscrever-se</a></p>
          </form>
        </div>

        <div className="background-container">
          <img src={backgroundImg} alt="background-image" />
        </div>
      </Content>
    </Container>
  );
}

