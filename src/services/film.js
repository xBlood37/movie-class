const params = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '019f45ffad25df23ae4bc380bfe0d72f',
  sessionId: '',
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
  },
};

export const getFilm = async (current = 1) => {
  const res = await fetch(
    `${params.baseUrl}discover/movie?api_key=${params.apiKey}&language=en-US&query=Good&page=${current}&include_adult=false`,
  );

  if (!res.ok) throw new Error('Could not fetch.');

  const data = await res.json();
  return data;
};

export const searchFilm = async (label) => {
  const res = await fetch(
    `${params.baseUrl}search/movie?query=${label}&include_adult=false&language=ru-US&region=ru`,
    options,
  );

  if (!res.ok) throw new Error('Could not fetch.');

  const data = await res.json();
  return data;
};

const guestSession = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${params.apiKey}`,
    options,
  );

  if (!res.ok) throw new Error('Could not fetch.');

  const data = await res.json();
  params.sessionId = data.guest_session_id;
  console.log(params.sessionId, 'params.sessionId IN guestSession');
};

await guestSession();

export const addRating = async (id, rate) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ value: rate }),
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${params.apiKey}&guest_session_id=${params.sessionId}`,
    options,
  );

  if (!res.ok) throw new Error('Could not fetch.');

  console.log(params.sessionId, 'params.sessionId');
  const inAddRating = await res.json();
  console.log(inAddRating, 'inAddRating');
};

export const getRateFilm = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${params.sessionId}/rated/movies?api_key=${params.apiKey}`,
  );

  if (!res.ok) throw new Error('Could not fetch.');

  const rated = await res.json();
  return rated.results;
};
