import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CarouselComponent } from "../components/CarouselComponent";
import { CarouselPhoto } from "../components/CarouselPhoto";
import "./styles/styles.css";

const POSTER_RANDOM = gql`
  query getPosterRandom {
    posterRand {
      poster
    }
  }
`;

const CarouselRandom = () => {
  return (
    <Query query={POSTER_RANDOM}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <div className="skeleton-container">
              <SkeletonTheme color="#777777" highlightColor="#444">
                <Skeleton height={180} />
              </SkeletonTheme>
            </div>
          );
        if (error) return <p>Error....</p>;

        return (
          <CarouselComponent className="CarouselComponent">
            {data.posterRand.map((img) => (
              <CarouselPhoto key={img.poster} {...img} />
            ))}
          </CarouselComponent>
        );
      }}
    </Query>
  );
};

export default CarouselRandom;
