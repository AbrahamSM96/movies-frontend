import React from 'react';
import { Link } from '@reach/router';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent';
import { PhotoCard } from '../components/PhotoCard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles/styles.css';

const GET_MOVIES = gql`
  query getMovieByName($title: String!) {
    movieByName(title: $title) {
      title
      id
      poster
    }
  }
`;

const ListOfPhotoCards = ({ title }) => {
  // se debe de retornar la igual la query para que no genere error al hacer la busqueda
  return (
    <Query query={GET_MOVIES} variables={{ title }}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div style={{ marginLeft: 10, marginTop: 20 }}>
              <SkeletonTheme color='#777777' highlightColor='#444'>
                <Skeleton width={190} height={265} />
              </SkeletonTheme>
            </div>
          );
        if (error)
          return (
            <div style={{ marginLeft: 10, marginTop: 20 }}>
              <SkeletonTheme color='#777777' highlightColor='#444'>
                <Skeleton width={190} height={265} />
              </SkeletonTheme>
            </div>
          );

        return (
          <ListOfPhotoCardsComponent>
            {data.movieByName.map((movie) => (
              <Link to={`/detail/${movie.id}`} key={movie.id}>
                <PhotoCard key={movie.id} {...movie} />
              </Link>
            ))}
          </ListOfPhotoCardsComponent>
        );
      }}
    </Query>
  );
};

export default ListOfPhotoCards;
