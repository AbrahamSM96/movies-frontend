import React, { Fragment } from 'react';
import AddButton from '../../components/AddButton';
import { connect } from 'react-redux';
import { listSelected, addMovie } from '../../actions';
import {
  DetailContainer,
  ImgWrapper,
  Img,
  H2,
  H3,
  Details,
  Strong,
} from './styles';

const NOTFOUND_POSTER = 'https://dummyimage.com/190x265.png?text=Not+Found';

const DetailPhotoCard = (props) => {
  const { id, title, poster, director, genre, year, actors, state } = props;

  const handleSetMovie = () => {
    props.addMovie({
      id,
      title,
      poster,
    });

    const itemJ = state.lists;
    console.log('stateList', state.lists);

    window.localStorage.setItem('keyList', JSON.stringify(itemJ));
  };

  const handleSetList = (e) => {
    props.listSelected({
      name: e.target.value,
    });
  };

  return (
    <Fragment>
      <DetailContainer>
        <ImgWrapper>
          {poster === 'N/A' ? (
            <Img src={NOTFOUND_POSTER} alt={title} />
          ) : (
            <Img src={poster} alt={title} />
          )}
        </ImgWrapper>
        <H2>{title}</H2>
        <H3>{year}</H3>
        <AddButton
          handleSetMovie={handleSetMovie}
          handleSetList={handleSetList}
          idMovie={id}
          poster={poster}
          key={props.id}
        />
      </DetailContainer>
      <Details>
        <H3>
          <Strong>Director:</Strong> {director}
        </H3>
        <H3>
          <Strong>Actors:</Strong> {actors}
        </H3>
        <H3>
          <Strong>Genre:</Strong> {genre}
        </H3>
      </Details>
    </Fragment>
  );
};

const mapDispatchToProps = {
  addMovie,
  listSelected,
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPhotoCard);
