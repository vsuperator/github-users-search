import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const githubToken = '06dfb85fa0a13406bcd445699992f340c9d1d1b1';
const serverURI = 'https://api.github.com/graphql' || 'https://48p1r2roz4.sse.codesandbox.io';

const httpLink = createHttpLink({
    uri: serverURI,
});

const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: githubToken ? `Bearer ${githubToken}` : "",
      }
    }
  });



export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
