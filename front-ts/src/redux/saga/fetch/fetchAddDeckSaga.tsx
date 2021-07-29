

export const fetchAddDeckSaga = async (title:string) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}deck/new`, {
      method: "POST",
      credentials: 'include',   //для видимости сессии
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({title}),
    });
    const data = res.json();
    return data;
  };
