import React, { FormEvent, useState, useContext } from 'react';

// import { Container } from './styles';
import { Auth } from '../../contexts/auth';

const Login: React.FC = () => {
  const { signIn } = useContext(Auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function logar(e: FormEvent) {
    e.preventDefault();
    await signIn(email, password);
  }
  return (
    <form onSubmit={logar}>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(ctx) => setEmail(ctx.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(ctx) => setPassword(ctx.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Entrar" />
      </div>
    </form>
  );
};

export default Login;
