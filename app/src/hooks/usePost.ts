import { gql, useQuery } from '@apollo/client';
import { PostInterface } from '@src/interfaces/post.interface';

const GET_POST = gql`
  query GetPost($options: PageQueryOptions!) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
`

export const usePost = (): PostInterface[] | undefined => {
  const { data } = useQuery(GET_POST, {
    variables: { 
      options: { 
        paginate: { 
          page: 1, limit: 10 
        } 
      }
    }
  });
  return data?.posts?.data;
}