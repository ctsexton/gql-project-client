import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_ARTISTS = gql`
  query artists {
    artists {
      name
    }
  }
`;

export default function Artists() {
  return (
    <Query query={GET_ARTISTS}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading!</p>;
        if (error) return <p>ERROR</p>;
        const list = data.artists.map(artist => <li>{artist.name}</li>)
        return (
          <ul>
            {list}
          </ul>
        )
      }}
    </Query>
  )
};

