

export const fetchAddCardSaga = async ({ question,answer }:{ question: string; answer: string}) => {
  const { REACT_APP_SERVER_URL } = process.env;
    const res = await fetch(`${REACT_APP_SERVER_URL}card`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ question,answer }),
    });
    const data = res.json();
    console.log(data)
    return data;
  };
