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
        }
      }
    `}
    environment={environment}
    render={({ error, props }) => {
      if (error) return <p>ERROR</p>;
      if (!props) return <p>Loading!</p>;
      const list = props.artists.map(artist => <li>{artist.name}</li>)
      return (
        <ul>
          {list}
        </ul>
      )
    }}
    />
  )
};

