import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://www.learnwithmovement.com/api/graphql",
  cache: new InMemoryCache()
});

export default client
