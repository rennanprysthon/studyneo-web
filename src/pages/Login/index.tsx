import React, { FormEvent, useState } from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function logar(e: FormEvent) {
    e.preventDefault();
    console.log('Submited');
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
        <input type="button" value="Entrar" />
      </div>
    </form>
  );
};

export default Login;
