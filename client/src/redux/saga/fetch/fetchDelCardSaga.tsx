export const fetchDelCardSaga = async ({ deckId,cardId }:{ deckId: string; cardId: string}) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}card/delete`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ deckId,cardId }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
