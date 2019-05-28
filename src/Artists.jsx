import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from './environment';

export default function Artists() {
  return (
    <QueryRenderer query={
      graphql`query ArtistsQuery {
        artists {
          name
          songs {
            name
          }
        }
      }
    `}
    environment={environment}
    render={({ error, props }) => {
      if (error) return <p>ERROR</p>;
      if (!props) return <p>Loading!</p>;
      const list = props.artists.map(artist => {
        const songs = artist.songs.map(song => <li>{song.name}</li>)
        return (
          <li>
            <p>{artist.name}</p>
            <ul>{songs}</ul>
          </li>
        )
      })
      return (
        <div>
          <h4>Artists & Songs</h4>
          <p>(including collaborations)</p>
          <ul>
            {list}
          </ul>
        </div>
      )
    }}
    />
  )
};

