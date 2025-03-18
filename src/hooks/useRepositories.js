import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { loading, error, data, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const repositories = data ? data.repositories : undefined

  return { repositories, loading, error, refetch };
};

export default useRepositories;