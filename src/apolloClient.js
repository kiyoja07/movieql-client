import ApolloClient from "apollo-boost"; // apollo-boost is a minimal config way to start using Apollo Client

const client = new ApolloClient ({
    uri: "https://movieql.now.sh/"
});

export default client;
