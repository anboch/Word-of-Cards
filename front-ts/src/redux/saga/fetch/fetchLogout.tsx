const { REACT_APP_SERVER_URL } = process.env;

export const fetchLogout = async () => {
  const req = await fetch(`${REACT_APP_SERVER_URL}user/logout`, {
    credentials: 'include',
  });
  const res = await req;
  console.log('res:', res);
  return res;
};
