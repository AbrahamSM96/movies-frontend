// actions solo se encarga de describir la informacion que vamos a hacer y pasar
// un objeto, payload es la informacion que le vamos a transmitir,
// El type es un identificador de lo que estamos haciendo
export const searchMovie = (payload) => ({
  type: 'SEARCH_VIDEO',
  payload,
});

export const addMovie = (payload) => ({
  type: 'ADD_MOVIE',
  payload,
});

export const addList = (payload) => ({
  type: 'ADD_LIST',
  payload,
});

export const inputAddList = (payload) => ({
  type: 'INPUT_ADD_LIST',
  payload,
});

export const listSelected = (payload) => ({
  type: 'SET_LIST',
  payload,
});

export const deleteMovie = (payload) => ({
  type: 'DELETE_MOVIE',
  payload,
});
