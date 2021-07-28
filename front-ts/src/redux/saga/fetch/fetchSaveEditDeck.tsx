
export const saveEditDeckFetch = async ({deckId, newTitle}:{deckId:string,newTitle:string}) => {

  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}deck/renameTitle`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({deckId,newTitle}),
    });
    const data = res.json();
   
    return data;
  };
