import api from '.';


interface Response{
  token:string,
}
const login = async (email:string, password:string) => {
  const response = await api.post<Response>('/admin/login', { email, password });
  return response.data.token;
};

const Session = {
  login,
};

export default Session;
