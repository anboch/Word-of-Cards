export const fetLoginUserSaga = async ({ login, password }) => {

  const res = await fetch("http://localhost:2224/user/login", {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ login, password }),
  });
  const data = res.json();
  return data;
};
