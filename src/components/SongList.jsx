import React, { Component, Fragment } from 'react';
import draw from './sharePie';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.nodes = {};
  }

  componentDidMount() {
    this.props.songs.map(song => {
      const data = song.collaborators.map(collab =>
        ({ value: collab.share, name: collab.artist.name })
      );
      draw(this.nodes[song.id], data)
    });
  }

  render() {
    const { songs } = this.props;
    const list = songs.map(song => {
      return (
        <li key={song.name} style={{listStyleType: "none"}}>
          <h3><b>Song Title: </b>{song.name}</h3>
          <p><b>Primary Artist: </b>{song.artist.name}</p>
          <h5>Collaborator Split:</h5>
          <svg ref={ node => { this.nodes[song.id] = node } } ></svg>
        </li>
      )
    });
    return (
      <ul>
        {list}
      </ul>
    )
  }
};

export default SongList;
