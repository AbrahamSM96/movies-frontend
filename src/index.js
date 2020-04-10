import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './App';

const client = new ApolloClient({
  uri: 'https://movie-apollo-ql.herokuapp.com/graphql',
});

const localStorageList = localStorage.getItem('keyList');

let initialState = {
  'searchText': '',
  'inputAddList': '',
  'lists': [],
  'listSelected': {},
};

if (localStorageList) {
  initialState.lists = JSON.parse(localStorageList);
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
);
