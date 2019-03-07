import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo"; //  React integration for Apollo Client
import { HOME_PAGE } from "./queries"
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "something happened";
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ));
      }}
    </Query>
  </Container>
);

export default Home;

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.