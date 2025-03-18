import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Query {
  repositories {
    edges {
      cursor
      node {
        name
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        url
        ownerAvatarUrl
        description
        language
      }
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
  }
}
`;

// other queries...