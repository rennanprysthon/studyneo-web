import api from '.';


const listUsers = async (page:number) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};

const Api = {
  listUsers,
};

export default Api;
