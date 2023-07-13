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
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmFkZDM4ZmI5NmJkMTNhZGE1NzNkMWNjY2RlM2VkZiIsInN1YiI6IjY0NTg0MmY0NmFhOGUwMDBlNGJjMzhlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UjWs2wDA2vr7DEbed8goAYA7IIFjgtgaFz4iqKEvmBc',
  },
};

export const getFilm = async (current = 1) => {
  const res = await fetch(
    `${params.baseUrl}discover/movie?api_key=${params.apiKey}&language=en-US&query=Good&page=${current}&include_adult=false`,
  );
  const data = await res.json();
  return data;
};

export const searchFilm = async (label) => {
  const res = await fetch(
    `${params.baseUrl}search/movie?query=${label}&include_adult=false&language=ru-US&region=ru`,
    options,
  );
  const data = await res.json();
  return data;
};

const guestSession = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${params.apiKey}`,
    options,
  );
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
  console.log(params.sessionId, 'params.sessionId');
  const inAddRating = await res.json();
  console.log(inAddRating, 'inAddRating');
};

export const getRateFilm = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${params.sessionId}/rated/movies?api_key=${params.apiKey}&page=1`,
  );
  console.log(params.sessionId, 'params.sessionId In getRateFilm ');
  const rated = await res.json();
  console.log(rated);
};
