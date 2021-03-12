import { gql } from "@apollo/client";

export default gql`
  query($query: String!, $after: String!) {
    search(type: USER, query: $query, first: 10, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      nodes {
        ... on User {
          id
          name
          login
          bio
          avatarUrl
          company
          createdAt
          email
          followers {
            totalCount
          }
          following {
            totalCount
          }
          starredRepositories {
            totalCount
          }
        }
      }
      userCount
    }
  }
`;
