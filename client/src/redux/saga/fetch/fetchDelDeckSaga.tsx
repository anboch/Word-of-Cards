export const fetchDelDeckSaga = async (id:string) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}deck/delete`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({id}),
    });
    const data = res.json();
    return data;
  };
