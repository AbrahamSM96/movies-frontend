import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import DetailPhotoCard from '../components/DetailPhotoCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GET_SINGLE_MOVIE = gql`
  query getMovieById($id: ID!) {
    movieById(id: $id) {
      title
      id
      poster
      director
      genre
      year
      actors
    }
  }
`;

const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_MOVIE} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div
              style={{
                marginTop: 30,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SkeletonTheme color='#777777' highlightColor='#444'>
                <Skeleton width={230} height={340} />
              </SkeletonTheme>
            </div>
          );
        if (error) return <p>Error id</p>;
        const { movieById = {} } = data;

        return (
          <Fragment>
            <DetailPhotoCard
              key={movieById.id}
              id={movieById.id}
              poster={movieById.poster}
              {...movieById}
            />
          </Fragment>
        );
      }}
    </Query>
  );
};

export default PhotoCardWithQuery;
