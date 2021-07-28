
export const saveEditDeckFetch = async (deck) => {

  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}deck/saveDeck`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({saveDeck:deck}),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
