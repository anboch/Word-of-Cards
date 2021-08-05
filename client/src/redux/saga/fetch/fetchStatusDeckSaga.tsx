
export const fetchStatusDeckSaga = async (deckId:string) => {
  const { REACT_APP_SERVER_URL } = process.env;
  console.log(deckId)
    const res = await fetch(`${REACT_APP_SERVER_URL}deck/status`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({deckId}),
    });
    const data = res.json();
    return data;
  };
