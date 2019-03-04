import React from "react";
import { Query } from "react-apollo"; //  React integration for Apollo Client
import { HOME_PAGE } from "./queries"

const Home = () => (
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading, please wait a minute!";
        if (error) return "something happened";
        return data.movies.map(movie => (
          <h2 key={movie.id}>
            {movie.title} / {movie.rating}
          </h2>
        ));
      }}
    </Query>
);

export default Home;

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.