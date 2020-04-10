import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { NavBar } from './components/NavBar';
import { Logo } from './components/Logo';
// import { NotFound } from './pages/NotFound';
// import { Detail } from './pages/Detail';
// import Lists from './pages/Lists';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Lists = React.lazy(() => import('./pages/Lists'));
const Detail = React.lazy(() => import('./pages/Detail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Detail path='/detail/:detailId' />
        <Lists path='/lists' />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;
