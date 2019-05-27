import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SongDropdown from './components/SongDropdown';

const GET_SONGS = gql`
  query songList {
    songs {
      name
      id
      artist {
        name
      }
    }
  }
`;

function SelectSong() {
  return (
    <Query query={GET_SONGS}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading!</p>;
        if (error) return <p>ERROR</p>;
        return (
          <SongDropdown songs={data.songs} />
        )
      }}
    </Query>
  )
};

export default SelectSong;
