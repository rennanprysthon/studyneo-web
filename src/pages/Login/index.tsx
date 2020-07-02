import React, { FormEvent, useState, useContext } from 'react';

import { Auth } from '../../contexts/auth';
import Img from '../../assets/img1.png';

import {
  Container, Header, Logo, Form, Button,
} from './styles';

const Login: React.FC = () => {
  const { signIn } = useContext(Auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function logar(e: FormEvent) {
    e.preventDefault();
    await signIn(email, password);
  }
  return (
    <Container onSubmit={logar}>
      <Header>
        <Logo src={Img} alt="Logo" />
        <h1>Bem vindo ao StudyNeo!</h1>
      </Header>
      <Form>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(ctx) => setEmail(ctx.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(ctx) => setPassword(ctx.target.value)}
        />
        <Button>
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
