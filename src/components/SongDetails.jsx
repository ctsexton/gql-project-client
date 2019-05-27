import React, { Component } from 'react';
import draw from './sharePie';

class SongDetails extends Component {
  componentDidMount() {
    const { song } = this.props;
    const data = song.collaborators.map(collab =>
      ({ value: collab.share, name: collab.artist.name })
    );
    draw(this.node, data);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.song.id !== nextProps.song.id;
  }

  componentDidUpdate(prevProps) {
    if (this.props.song.id !== prevProps.song.id) {
      const { song } = this.props;
      const data = song.collaborators.map(collab =>
        ({ value: collab.share, name: collab.artist.name })
      );
      draw(this.node, data);
    }
  }

  render() {
    const { song } = this.props;
    return (
      <div>
        <h3><b>Song Title: </b>{song.name}</h3>
        <p><b>Primary Artist: </b>{song.artist.name}</p>
        <h5>Collaborator Split:</h5>
        <svg ref={ node => { this.node = node } } ></svg>
      </div>
    )  
  }
};

export default SongDetails;
