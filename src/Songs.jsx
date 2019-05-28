import React from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import SongList from './components/SongList';
import environment from './environment';

export default function Songs() {
  return (
    <QueryRenderer query={
      graphql`query SongsQuery {
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
    `}
    environment={environment}
    render={({ error, props }) => {
      if (error) return <p>ERROR</p>;
      if (!props) return <p>Loading!</p>;
      return (
        <SongList songs={props.songs} />
      )
    }}
    />
  )
};
