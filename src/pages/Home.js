import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search/index';
import { ContainerPhotoCards } from '../components/ContainerPhotoCards';
import { CarouselComponent } from '../components/CarouselComponent';
import ListOfPhotoCards from '../container/ListOfPhotoCards';
import CarouselRandom from '../container/CarouselRandom';
import { Layout } from '../components/Layout';

const Home = ({ searchText }) => {
  // const regex = new RegExp(`.*${searchText.toLowerCase()}`);
  const searchFilter = searchText.toLowerCase().trim();
  return (
    <Layout
      title='App movies'
      subtitle='The app can search a movies and you can create lists for add your favorites movies'
    >
      <Search />
      <CarouselRandom />
      {searchFilter.length > 2 && (
        <ContainerPhotoCards titleList='Results search'>
          <ListOfPhotoCards title={searchFilter} />
        </ContainerPhotoCards>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

export default connect(mapStateToProps, null)(Home);
