

export const fetchAddCardSaga = async ({deckId,question,answer }:{deckId:string, question: string; answer: string}) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}card/add`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({deckId, question,answer }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
