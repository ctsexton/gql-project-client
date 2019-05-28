import React, { Component } from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import SongSelector from './components/SongSelector';
import environment from './environment';

class SelectSong extends Component {
  render() {
    return (
      <div>
        <h4>Select A Song</h4>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query SongViewerQuery {
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
              <SongSelector songs={props.songs} />
            )
          }}
        />
      </div>
    )
  }
};

export default SelectSong;
