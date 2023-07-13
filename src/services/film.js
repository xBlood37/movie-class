const baseUrl = `https://api.themoviedb.org/3/`;
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
    `${baseUrl}discover/movie?api_key=019f45ffad25df23ae4bc380bfe0d72f&include_adult=false&include_video=false&language=ru-US&page=${current}&sort_by=popularity.desc`,
    options,
  );
  const data = await res.json();
  return data;
};

export const searchFilm = async (label) => {
  const res = await fetch(
    `${baseUrl}search/movie?query=${label}&include_adult=false&language=ru-US&region=ru`,
    options,
  );
  const data = await res.json();
  return data;
};

const guestSession = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=019f45ffad25df23ae4bc380bfe0d72f`,
    options,
  );
  const data = await res.json();
  // console.log(data.guest_session_id);
  localStorage.setItem('guest_session_id', data.guest_session_id);
  // return data.guest_session_id;
};

await guestSession();

// const sessionId = guestSession();
const sessionId = localStorage.getItem('guest_session_id');
console.log(sessionId);

export const addRating = async (id, rate) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTlmNDVmZmFkMjVkZjIzYWU0YmMzODBiZmUwZDcyZiIsInN1YiI6IjY0N2RlMzFlY2Y0YjhiMDEyMjc3MjEyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IW7VeL8I9KTtx9259oVN1Vub-visR3waR1RVkdwjPHc',
    },
    body: JSON.stringify({ value: rate }),
  };

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/rating?api_key=019f45ffad25df23ae4bc380bfe0d72f&guest_session_id=${sessionId}`,
    options,
  );
  const data = await res.json();
  console.log(data);
  // console.log(res.json());
};

export const getRateFilm = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${sessionId}/rated/movies?api_key=019f45ffad25df23ae4bc380bfe0d72f&page=1`,
    options,
  );
  console.log(sessionId);
  const data = await res.json();
  console.log(data);
};

// ?api_key=019f45ffad25df23ae4bc380bfe0d72f
