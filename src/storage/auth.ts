
const getUserToken = () => localStorage.getItem('@TOKEN');
const getUserRefreshToken = () => localStorage.getItem('@REFRESH_TOKEN');

const setUserToken = (token:string) => localStorage.setItem('@TOKEN', token);
const setUserRefreshToken = (refresh_token:string) => localStorage.setItem('@REFRESH_TOKEN', refresh_token);
const Storage = {
  getUserToken,
  getUserRefreshToken,
  setUserToken,
  setUserRefreshToken,
};

export default Storage;
