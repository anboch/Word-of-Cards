
const { REACT_APP_SERVER_URL } = process.env;


export const fetchLoginUserSaga = async ({ login, password }) => {
  const res = await fetch(`${REACT_APP_SERVER_URL}user/login`, {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ login, password }),
  });
  const data = res.json();
 
  return data;
};
