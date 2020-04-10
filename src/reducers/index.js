import _ from 'lodash';
const reducer = (state = [], action) => {
  // encuentra si ya hay un mismo id en la myList
  // const exists = state.lists.find((item) => item.id === action.payload.id);
  // switch nos permite recibir el type y evaluarlo en cualquiera de los casos
  switch (action.type) {
    case 'SEARCH_VIDEO':
      return {
        ...state,
        searchText: action.payload,
      };
    case 'SET_LIST':
      const listSelected = action.payload; //{name:"", movies:[]}

      console.log('set_list', listSelected);

      // state.lists = { ...state.lists, newList };
      return { ...state, listSelected: listSelected };

    case 'ADD_MOVIE':
      console.log('addmovieactionpayload', action.payload);
      let { listSelected: listS } = state;

      if (state.lists.length === 0) {
        const newList = [{ name: 'default', movies: [] }];
        state.lists = newList;
        listS = { name: 'default' };
      }

      const list = state.lists.find((l) => {
        return l.name === listS.name;
      });

      list.movies.push(action.payload);
      return { ...state };

    case 'INPUT_ADD_LIST':
      let inputAddList = action.payload;
      return {
        ...state,
        inputAddList,
      };

    case 'ADD_LIST':
      // state.lists.push({ name: state.inputAddList, movies: [] });

      state.lists = [...state.lists, { name: state.inputAddList, movies: [] }];
      return { ...state };

    // return { ...state, addNewList };
    case 'DELETE_MOVIE':
      const { nameList, idMovie } = action.payload;
      const listSelectedotD = state.lists.filter(
        (item) => item.name === nameList
      );

      _.remove(listSelectedotD[0].movies, (movie) => {
        return movie.id === idMovie;
      });

      state.lists = [...state.lists];
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
