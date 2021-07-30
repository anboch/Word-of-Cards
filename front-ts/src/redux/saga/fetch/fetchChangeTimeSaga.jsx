const { REACT_APP_SERVER_URL } = process.env;

export const fetchChangeTimeSaga = async ({ newDate }) => {
  const req = await fetch(`${REACT_APP_SERVER_URL}user/changetime`, {
    credentials: 'include',
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ newDate }),
  });
  const res = await req.json();
  return res;
};
