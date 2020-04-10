import React from 'react';
import AddListButton from '../components/AddListButton';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions';
import ListOfFavs from '../components/ListOfFavs';
import { ContainerPhotoCards } from '../components/ContainerPhotoCards';
import { TitleContainer, H1 } from '../styles/listsStyles';
import { Layout } from '../components/Layout';

const Lists = ({ deleteMovie, lists }) => {
  return (
    <Layout
      title='Lists'
      subtitle='Here you can add new lists, but the lists must have a movies, if they are not deleted'
    >
      <TitleContainer>
        <H1>Lists</H1>
        <AddListButton />
      </TitleContainer>
      {lists.map((list) => (
        <ContainerPhotoCards titleList={list.name} key={list.name}>
          <ListOfFavs
            list={list}
            key={list.name}
            name={list.name}
            deleteMovie={deleteMovie}
          />
        </ContainerPhotoCards>
      ))}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

const mapDispatchToProps = {
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
