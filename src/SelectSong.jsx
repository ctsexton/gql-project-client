import React from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import SongDropdown from './components/SongDropdown';
import environment from './environment';

function SelectSong() {
  return (
    <div>
      <h4>Select A Song</h4>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SelectSongQuery {
            songs {
              name
              id
              artist {
                name
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) return <p>ERROR</p>;
          if (!props) return <p>Loading...</p>;
          return (
            <SongDropdown songs={props.songs} />
          )
        }}
      />
    </div>
  )
};

export default SelectSong;
