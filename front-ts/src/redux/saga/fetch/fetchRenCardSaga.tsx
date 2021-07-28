export const fetchRenCardSaga = async ({ deckId,cardId,question,answer }:{ deckId: string; 
  cardId: string; question:string; answer:string}) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}card/rename`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ deckId,cardId, question,answer }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
