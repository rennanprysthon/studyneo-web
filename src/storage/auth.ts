
const getUserToken = () => localStorage.getItem('@TOKEN');

const setUserToken = (token:string) => localStorage.setItem('@TOKEN', token);
const Storage = {
  getUserToken,
  setUserToken,
};

export default Storage;
