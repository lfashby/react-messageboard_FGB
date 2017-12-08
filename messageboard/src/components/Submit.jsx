import React, { Component } from 'react';
import { Panel, Button, FormGroup, FormControl } from 'react-bootstrap';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostBody: '',
    };

    this.handlePostInputChange = this.handlePostInputChange.bind(this);
    this.createPost = this.createPost.bind(this);
  }

  handlePostInputChange(e) {
    this.setState({
      newPostBody: e.target.value
    });
  }

  createPost() {
    this.props.postMessage(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    });
  }

  render() {
    return (
      <Panel className="post-submit-module">
        <form>
          <FormGroup>
            <FormControl className="post-input" type="text" placeholder="Add your message" onChange={this.handlePostInputChange} value={this.state.newPostBody} />
            <Button bsStyle="primary" className="message-post-button" onClick={this.createPost}>Post</Button>
          </FormGroup>
        </form>
      </Panel>
    );
  }
}

export default Submit;
