export const fetchAddUserSaga = async ({ login, email, password }) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}user/signup`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ login, email, password }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
