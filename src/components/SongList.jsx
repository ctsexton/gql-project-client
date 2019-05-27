import React from 'react';
import SongDetails from './SongDetails';

function SongList(props) {
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
};

export default SongList;
