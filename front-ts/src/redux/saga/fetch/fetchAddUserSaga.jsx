export const fetchAddUserSaga = async ({ login, email, password }) => {

    const res = await fetch("http://localhost:2224/user/signup", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ login, email, password }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
