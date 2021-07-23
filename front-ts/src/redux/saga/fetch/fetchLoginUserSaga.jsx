export const fetchLoginUserSaga = async ({ login, password }) => {
  const res = await fetch("http://localhost:2224/user/login", {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ login, password }),
  });
  const data = res.json();
  console.log(data)
  return data;
};
