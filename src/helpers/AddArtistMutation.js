import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation AddArtistMutation($input: AddArtistInput!) {
    addArtist(input: $input) {
      name
      id
    }
  }
`;

function commit(
  environment,
  name
) {
  return commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: name
      }
    }
  );
}

export default {commit};
