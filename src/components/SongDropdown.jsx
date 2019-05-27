import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import SongDetails from './SongDetails';

const GET_SONG = gql`
  query song($id: String) {
    song(id: $id) {
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

class SongDropdown extends Component {
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
    console.log(selected);
    if (selected === '---') {
      this.setState({ selectedSong: null })
    } else {
      this.setState({ selectedSong: selected })
    }
  }

  render() {
    const { songs } = this.props;
    const list = songs.map(song => <option key={song.name} data-id={song.id}>{song.name}</option>);
    return (
      <div>
        <select onChange={this.handleChange} className="dropdown">
          <option>---</option>
          {list}
        </select>
        <div>
          {this.state.selectedSong ?
              <Query query={GET_SONG} variables={{ id: this.state.selectedSong }}>
                {({ data, loading, error }) => {
                  if (loading) return <p>Loading!</p>;
                  if (error) {console.log(error); return <p>ERROR</p>};
                  return (
                    <SongDetails song={data.song} />
                  )
                }}
              </Query>
              :
              'No current selection'
          }
        </div>
      </div>
    )
  }
};

 export default SongDropdown;
