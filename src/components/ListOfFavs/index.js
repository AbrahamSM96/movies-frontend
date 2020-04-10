import React from 'react';
import { connect } from 'react-redux';
import { ListOfPhotoCardsComponent } from '../ListOfPhotoCardsComponent';
import { PhotoCard } from '../PhotoCard';
import { Div, Button } from './styles';

const ListOfFavs = ({ list, name, deleteMovie, state }) => {
  const handleDeleteMovie = (nameList, idMovie) => {
    deleteMovie({ nameList, idMovie });
    window.localStorage.setItem('keyList', JSON.stringify(state.lists));
  };

  return (
    <ListOfPhotoCardsComponent className='ListOfPhotoCardsComponent'>
      {list.movies.map((item) => (
        <Div className='DivButtonPhotoCard' key={item.id}>
          <PhotoCard key={item.id} {...item} />
          <Button onClick={() => handleDeleteMovie(name, item.id)}>
            Delete
          </Button>
        </Div>
      ))}
    </ListOfPhotoCardsComponent>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, null)(ListOfFavs);
