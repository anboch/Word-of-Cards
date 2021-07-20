export const fetAddUserSaga = async ({ login, email, password }) => {

    const res = await fetch("http://localhost:2224/user", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ login, email, password }),
    });
    const data = res.json();
    return data;
  };

