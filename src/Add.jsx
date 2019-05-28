import React, { Component } from 'react';
import AddArtistMutation from './helpers/AddArtistMutation';
import environment from './environment';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const text = e.target.value;
    this.setState({ input: text })
  }

  async handleSubmit() {
    const ret = await AddArtistMutation.commit(
      environment,
      { name: this.state.input }
    );
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <h4>Add New Artist</h4>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Add;
