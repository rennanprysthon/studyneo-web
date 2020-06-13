import React, {
  useState,
  useCallback,
} from 'react';
import { api } from '../services/api';

const Routes:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logar = useCallback(
    async () => {
      try {
        const response = await api.post('/admin/login', {
          email,
          password,
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }, [password, email],
  );

  return (
    <form onSubmit={logar}>
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <input type="email" value={email} onChange={(ctx) => setEmail(ctx.target.value)} />
        <input type="password" value={password} onChange={(ctx) => setPassword(ctx.target.value)} />
      </div>
      <div>
        <input type="button" onClick={logar} value="Entrar" />
      </div>
    </form>
  );
};

export default Routes;
