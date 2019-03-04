import gql from "graphql-tag"; //  to use gql module:

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
    }
  }
`;