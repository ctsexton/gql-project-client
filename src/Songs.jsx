import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SongList from './components/SongList';

const GET_SONGS = gql`
  query songList {
    songs {
      id
      name
      artist {
        name
      }
      collaborators {
        artist {
          name
        }
        share
      }
    }
  }
`;

export default function Songs() {
  return (
    <Query query={GET_SONGS}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading!</p>;
        if (error) return <p>ERROR</p>;
        return (
          <SongList songs={data.songs} />
        )
      }}
    </Query>
  )
};
