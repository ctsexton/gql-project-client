import React, { Component } from 'react';
import { createFragmentContainer, QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import SongDetails from './SongDetails';
import environment from '../environment';

class SongSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSong: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let selected = null;
    for (let node of e.target.children) {
      if (node.value === e.target.value) {
        selected = node.getAttribute('data-id');
      }
    };
    if (selected === '---') {
      this.setState({ selectedSong: null })
    } else {
      this.setState({ selectedSong: selected })
    }
  }

  render() {
    // Very strange. Due to using songs in fragment.
    const { songs } = this.props.songs;
    const list = songs.map(song => <option key={song.name} data-id={song.id}>{song.name}</option>);
    return (
      <div>
        <select onChange={this.handleChange} className="dropdown">
          <option>---</option>
          {list}
        </select>
        <div>
          {this.state.selectedSong ?
              <QueryRenderer
                environment={environment}
                query={graphql`
                  query SongSelectorQuery($id: String) {
                    song(id: $id) {
                      ...SongDetails_song
                    }
                  }
                `}
                variables={{ id: this.state.selectedSong }}
                render={({ error, props }) => {
                  if (error) return <p>ERROR</p>;
                  if (!props) return <p>Loading!</p>;
                  return (
                    <SongDetails song={props.song} />
                  )
                }}
              />
              :
              'No current selection'
          }
        </div>
      </div>
    )
  }
};

// export default SongSelector;
export default createFragmentContainer(
  SongSelector,
  graphql`
    fragment SongSelector_songs on Query {
      songs {
        id
        name
      }
    }
  `
);
