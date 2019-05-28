import React from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import SongDetails from './components/SongDetails';
import environment from './environment';

export default function Songs() {
  return (
    <QueryRenderer query={
      graphql`query SongsQuery {
        songs {
          ...SongDetails_song
        }
      }
    `}
    environment={environment}
    render={({ error, props }) => {
      if (error) return <p>ERROR</p>;
      if (!props) return <p>Loading!</p>;
      const { songs } = props;
      const list = songs.map(song => {
        return (
          <li key={song.name} style={{listStyleType: "none"}}>
            <SongDetails song={song} />
          </li>
        )
      });
      return (
        <ul>
          {list}
        </ul>
      )
    }}
    />
  )
};
