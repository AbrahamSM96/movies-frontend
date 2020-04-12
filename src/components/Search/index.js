import React from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions';
import { Container, H1, Input } from './styles';

const Search = ({ searchMovie }) => {
  const handleInput = (event) => {
    searchMovie(event.target.value);
  };

  return (
    <Container>
      <H1>Search movie</H1>
      <Input
        type='text'
        name='Searcher'
        placeholder='Search...'
        onChange={handleInput}
      />
    </Container>
  );
};

const mapDispatchToProps = {
  searchMovie,
};

export default connect(null, mapDispatchToProps)(Search);
